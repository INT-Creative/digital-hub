import type { APIRoute } from 'astro';

export const prerender = false;

// n8n Workflow Management API
export const POST: APIRoute = async ({ request }) => {
  try {
    const { action, workflow_id, ...data } = await request.json();

    // Base n8n API configuration
    const N8N_API_BASE = 'http://localhost:5678/api/v1';
    const headers = {
      'Content-Type': 'application/json',
      'X-N8N-API-KEY': process.env.N8N_API_KEY || '', // Add to env variables
    };

    if (action === 'trigger_workflow') {
      // Trigger a specific n8n workflow
      try {
        const response = await fetch(`${N8N_API_BASE}/workflows/${workflow_id}/activate`, {
          method: 'POST',
          headers,
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`n8n API error: ${response.status}`);
        }

        const result = await response.json();
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Workflow triggered successfully',
            execution_id: result.executionId,
            workflow_id
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        console.error('Workflow trigger error:', error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Failed to trigger workflow'
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    if (action === 'create_lead') {
      // Send lead data to n8n for processing
      const leadData = {
        type: 'new_lead',
        source: 'intcreative.co',
        timestamp: new Date().toISOString(),
        lead: data,
        automation: {
          send_welcome_email: true,
          add_to_hubspot: true,
          create_slack_notification: true,
          schedule_followup: true
        }
      };

      try {
        const response = await fetch('http://localhost:5678/webhook/new-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(leadData)
        });

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Lead processed successfully',
            automation_triggered: true
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        console.error('Lead automation error:', error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Lead automation failed'
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    if (action === 'send_client_update') {
      // Send project update to client via automated email
      const updateData = {
        type: 'client_update',
        client_id: data.client_id,
        project_id: data.project_id,
        update: data.update,
        progress: data.progress,
        timeline: data.timeline,
        timestamp: new Date().toISOString()
      };

      try {
        const response = await fetch('http://localhost:5678/webhook/client-update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateData)
        });

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Client update sent successfully'
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        console.error('Client update error:', error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Failed to send client update'
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    if (action === 'ai_content_generation') {
      // Trigger AI content generation workflow
      const contentRequest = {
        type: 'content_generation',
        prompt: data.prompt,
        content_type: data.content_type, // 'blog', 'social', 'email', 'web_copy'
        brand: 'INT Creative',
        tone: data.tone || 'professional',
        length: data.length || 'medium',
        seo_keywords: data.keywords || [],
        target_audience: data.audience || 'business_owners'
      };

      try {
        const response = await fetch('http://localhost:5678/webhook/ai-content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contentRequest)
        });

        const result = await response.json();
        
        return new Response(
          JSON.stringify({
            success: true,
            content: result.content,
            generation_id: result.id,
            processing_time: result.processing_time
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        console.error('AI content generation error:', error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Content generation failed'
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    if (action === 'social_media_post') {
      // Schedule social media posts across platforms
      const socialData = {
        type: 'social_post',
        platforms: data.platforms, // ['linkedin', 'twitter', 'facebook']
        content: data.content,
        images: data.images || [],
        schedule_time: data.schedule_time, // ISO string or 'now'
        hashtags: data.hashtags || [],
        brand: 'INT Creative'
      };

      try {
        const response = await fetch('http://localhost:5678/webhook/social-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(socialData)
        });

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Social media posts scheduled',
            scheduled_for: data.schedule_time,
            platforms: data.platforms
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        console.error('Social media post error:', error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Social media posting failed'
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid action specified'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Automation API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// GET /api/automation - Get automation status and workflows
export const GET: APIRoute = async ({ url }) => {
  try {
    const action = url.searchParams.get('action');
    
    if (action === 'workflows') {
      // Get list of available workflows
      try {
        const response = await fetch('http://localhost:5678/api/v1/workflows', {
          headers: {
            'X-N8N-API-KEY': process.env.N8N_API_KEY || ''
          }
        });

        if (!response.ok) {
          throw new Error(`n8n API error: ${response.status}`);
        }

        const workflows = await response.json();
        
        return new Response(
          JSON.stringify({
            success: true,
            workflows: workflows.data || []
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        console.error('Workflows fetch error:', error);
        return new Response(
          JSON.stringify({
            success: false,
            error: 'Failed to fetch workflows'
          }),
          {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    if (action === 'status') {
      // Get n8n system status
      try {
        const response = await fetch('http://localhost:5678/healthz');
        const isHealthy = response.ok;

        return new Response(
          JSON.stringify({
            success: true,
            automation_system: {
              status: isHealthy ? 'healthy' : 'unhealthy',
              n8n_version: '1.0.0', // Could fetch from n8n API
              active_workflows: 0, // Could count from workflows API
              last_execution: new Date().toISOString()
            }
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({
            success: true,
            automation_system: {
              status: 'offline',
              error: 'n8n not accessible'
            }
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid action parameter'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Automation status error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
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
      'Access-Control-Max-Age': '86400'
    }
  });
};