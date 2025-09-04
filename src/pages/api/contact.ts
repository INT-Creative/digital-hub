import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const budget = formData.get('budget') as string;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Name, email, and message are required' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid email format' 
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Prepare data for n8n webhook
    const webhookData = {
      type: 'contact_form',
      timestamp: new Date().toISOString(),
      contact: {
        name,
        email,
        company: company || '',
        phone: phone || '',
        service: service || 'General Inquiry',
        budget: budget || 'Not specified',
        message,
        source: 'intcreative.co',
        ip: request.headers.get('cf-connecting-ip') || 
            request.headers.get('x-forwarded-for') || 
            'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown'
      },
      lead_score: calculateLeadScore(service, budget, company, message)
    };

    // Send to n8n automation webhook
    try {
      const n8nResponse = await fetch('http://localhost:5678/webhook/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Source': 'intcreative.co'
        },
        body: JSON.stringify(webhookData)
      });

      if (!n8nResponse.ok) {
        console.error('n8n webhook failed:', n8nResponse.status);
        // Continue processing even if n8n fails
      }
    } catch (error) {
      console.error('n8n webhook error:', error);
      // Continue processing even if n8n fails
    }

    // Send immediate confirmation email via n8n
    try {
      await fetch('http://localhost:5678/webhook/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: email,
          name: name,
          type: 'contact_confirmation'
        })
      });
    } catch (error) {
      console.error('Confirmation email failed:', error);
    }

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for contacting INT Creative! We\'ll be in touch within 24 hours.',
        lead_id: `IC-${Date.now()}`
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://intcreative.co',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// OPTIONS for CORS preflight
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://intcreative.co',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
};

// Calculate lead scoring based on form data
function calculateLeadScore(service: string, budget: string, company: string, message: string): number {
  let score = 0;
  
  // Service type scoring
  const serviceScores: Record<string, number> = {
    'Website Development': 30,
    'Marketing Automation': 40,
    'Complete Marketing Package': 50,
    'Custom Development': 35,
    'Consulting': 20,
    'General Inquiry': 10
  };
  score += serviceScores[service] || 10;
  
  // Budget scoring
  const budgetScores: Record<string, number> = {
    '$10,000+': 50,
    '$5,000-$10,000': 40,
    '$2,500-$5,000': 30,
    '$1,000-$2,500': 20,
    'Under $1,000': 10,
    'Not specified': 5
  };
  score += budgetScores[budget] || 5;
  
  // Company presence
  if (company && company.trim().length > 0) {
    score += 15;
  }
  
  // Message quality (urgency indicators)
  const urgentKeywords = [
    'urgent', 'asap', 'quickly', 'soon', 'deadline',
    'launching', 'ready to start', 'budget approved'
  ];
  
  const messageText = message.toLowerCase();
  const urgentMatches = urgentKeywords.filter(keyword => 
    messageText.includes(keyword)
  ).length;
  
  score += urgentMatches * 10;
  
  // Message length (more detailed = higher intent)
  if (message.length > 200) score += 10;
  else if (message.length > 100) score += 5;
  
  return Math.min(score, 100); // Cap at 100
}