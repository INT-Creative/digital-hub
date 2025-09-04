import type { APIRoute } from 'astro';

export const prerender = false;

// Simple JWT-like token creation (for demo - use proper JWT in production)
function createAccessToken(clientId: string): string {
  const payload = {
    client_id: clientId,
    issued_at: Date.now(),
    expires_at: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
  };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

function validateAccessToken(token: string): { valid: boolean; clientId?: string } {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    if (Date.now() > payload.expires_at) {
      return { valid: false };
    }
    return { valid: true, clientId: payload.client_id };
  } catch {
    return { valid: false };
  }
}

// Mock client database (in production, use real database)
const CLIENT_DATABASE: Record<string, {
  id: string;
  name: string;
  email: string;
  company: string;
  password_hash: string; // In production: use bcrypt
  projects: Array<{
    id: string;
    name: string;
    status: 'planning' | 'in-progress' | 'review' | 'completed';
    progress: number;
    timeline: string;
    budget: string;
    description: string;
    deliverables: string[];
    last_updated: string;
  }>;
}> = {
  'john-doe': {
    id: 'john-doe',
    name: 'John Doe',
    email: 'john@johndoeenterprises.com',
    company: 'John Doe Enterprises',
    password_hash: 'demo123', // In production: bcrypt hash
    projects: [
      {
        id: 'jde-main-site',
        name: 'John Doe Enterprises - Corporate Website',
        status: 'in-progress',
        progress: 85,
        timeline: '1 week remaining',
        budget: '$2,500',
        description: 'Modern corporate website with portfolio showcase, client testimonials, and lead generation.',
        deliverables: [
          '✅ Brand strategy and visual identity',
          '✅ Homepage design and development',
          '✅ About and services pages',
          '✅ Portfolio showcase integration',
          '🔄 Contact forms and CRM integration',
          '⏳ Mobile optimization and testing'
        ],
        last_updated: new Date().toISOString()
      },
      {
        id: 'jde-ecommerce-site',
        name: 'John Doe Store - E-commerce Platform',
        status: 'in-progress',
        progress: 60,
        timeline: '3 weeks remaining',
        budget: '$3,500',
        description: 'Full-featured e-commerce website with payment processing and inventory management.',
        deliverables: [
          '✅ Product catalog setup',
          '✅ Shopping cart functionality',
          '🔄 Payment gateway integration',
          '🔄 Inventory management system',
          '⏳ Order processing automation',
          '⏳ Customer account portal'
        ],
        last_updated: new Date().toISOString()
      },
      {
        id: 'jde-marketing-automation',
        name: 'Marketing Automation Setup',
        status: 'planning',
        progress: 25,
        timeline: '2 weeks remaining',
        budget: '$1,800',
        description: 'Comprehensive marketing automation with email sequences and lead nurturing.',
        deliverables: [
          '✅ Marketing strategy consultation',
          '✅ Email templates design',
          '⏳ Automation workflow setup',
          '⏳ CRM integration',
          '⏳ Analytics and reporting'
        ],
        last_updated: new Date().toISOString()
      }
    ]
  }
};

// POST /api/client-portal - Authentication
export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request data
    const requestData = await request.json();
    const { action, ...data } = requestData;

    if (action === 'login') {
      const { client_id, password } = data;

      // Validate credentials
      const client = CLIENT_DATABASE[client_id];
      if (!client || client.password_hash !== password) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Invalid credentials' 
          }),
          {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }

      // Create access token
      const token = createAccessToken(client_id);

      return new Response(
        JSON.stringify({
          success: true,
          token,
          client: {
            id: client.id,
            name: client.name,
            email: client.email,
            company: client.company
          }
        }),
        {
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Set-Cookie': `client_token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=86400`
          }
        }
      );
    }

    if (action === 'logout') {
      return new Response(
        JSON.stringify({ success: true }),
        {
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Set-Cookie': 'client_token=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: false, error: 'Invalid action' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Client portal auth error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// GET /api/client-portal - Get client data
export const GET: APIRoute = async ({ request, url }) => {
  try {
    // Extract token from Authorization header or cookie
    const authHeader = request.headers.get('Authorization');
    const cookieHeader = request.headers.get('Cookie');
    
    let token = '';
    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    } else if (cookieHeader) {
      const tokenMatch = cookieHeader.match(/client_token=([^;]+)/);
      if (tokenMatch) token = tokenMatch[1];
    }

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: 'No authentication token' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate token
    const validation = validateAccessToken(token);
    if (!validation.valid || !validation.clientId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid or expired token' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get client data
    const client = CLIENT_DATABASE[validation.clientId];
    if (!client) {
      return new Response(
        JSON.stringify({ success: false, error: 'Client not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check what data is requested
    const dataType = url.searchParams.get('data');
    
    if (dataType === 'projects') {
      return new Response(
        JSON.stringify({
          success: true,
          projects: client.projects
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    if (dataType === 'profile') {
      return new Response(
        JSON.stringify({
          success: true,
          profile: {
            id: client.id,
            name: client.name,
            email: client.email,
            company: client.company,
            total_projects: client.projects.length,
            active_projects: client.projects.filter(p => p.status !== 'completed').length
          }
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Default: return dashboard summary
    const totalProjects = client.projects.length;
    const activeProjects = client.projects.filter(p => p.status !== 'completed');
    const avgProgress = Math.round(
      client.projects.reduce((sum, p) => sum + p.progress, 0) / totalProjects
    );

    return new Response(
      JSON.stringify({
        success: true,
        dashboard: {
          client_info: {
            name: client.name,
            company: client.company,
            email: client.email
          },
          summary: {
            total_projects: totalProjects,
            active_projects: activeProjects.length,
            completed_projects: client.projects.filter(p => p.status === 'completed').length,
            average_progress: avgProgress
          },
          recent_projects: client.projects
            .sort((a, b) => new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime())
            .slice(0, 3),
          next_milestones: activeProjects
            .filter(p => p.progress < 100)
            .map(p => ({
              project: p.name,
              status: p.status,
              timeline: p.timeline,
              progress: p.progress
            }))
        }
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Client portal data error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://intcreative.co',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400'
    }
  });
};