import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    // Check status of all INT Creative services
    const services = [
      { name: 'n8n Automation', url: 'http://localhost:5678/healthz', port: 5678 },
      { name: 'Plane Project Management', url: 'http://localhost:3001/api/health/', port: 3001 },
      { name: 'Uptime Kuma Monitoring', url: 'http://localhost:3004', port: 3004 },
      { name: 'Listmonk Email', url: 'http://localhost:3005/api/health', port: 3005 },
      { name: 'Plausible Analytics', url: 'http://localhost:3006', port: 3006 },
      { name: 'In-Vizon AI Platform', url: 'http://localhost:8000/health', port: 8000 }
    ];

    const statusChecks = await Promise.allSettled(
      services.map(async (service) => {
        try {
          const response = await fetch(service.url, {
            method: 'GET',
            timeout: 5000,
            headers: {
              'User-Agent': 'INT-Creative-Status-Check/1.0'
            }
          });
          
          return {
            name: service.name,
            status: response.ok ? 'healthy' : 'unhealthy',
            port: service.port,
            response_time: Date.now(),
            http_status: response.status,
            last_checked: new Date().toISOString()
          };
        } catch (error) {
          return {
            name: service.name,
            status: 'offline',
            port: service.port,
            error: error instanceof Error ? error.message : 'Unknown error',
            last_checked: new Date().toISOString()
          };
        }
      })
    );

    // Process results
    const results = statusChecks.map((check, index) => {
      if (check.status === 'fulfilled') {
        return check.value;
      } else {
        return {
          name: services[index].name,
          status: 'error',
          port: services[index].port,
          error: 'Status check failed',
          last_checked: new Date().toISOString()
        };
      }
    });

    // Calculate overall system health
    const healthyServices = results.filter(r => r.status === 'healthy').length;
    const totalServices = results.length;
    const healthPercentage = Math.round((healthyServices / totalServices) * 100);
    
    let overallStatus: string;
    if (healthPercentage >= 90) overallStatus = 'healthy';
    else if (healthPercentage >= 70) overallStatus = 'degraded';
    else overallStatus = 'critical';

    // System metrics
    const systemInfo = {
      hostname: 'INT-Creative-Production',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      overall_status: overallStatus,
      health_percentage: healthPercentage,
      services: results,
      summary: {
        total_services: totalServices,
        healthy: results.filter(r => r.status === 'healthy').length,
        unhealthy: results.filter(r => r.status === 'unhealthy').length,
        offline: results.filter(r => r.status === 'offline').length
      }
    };

    return new Response(
      JSON.stringify(systemInfo, null, 2),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'X-System-Status': overallStatus
        }
      }
    );

  } catch (error) {
    console.error('Status check error:', error);
    
    return new Response(
      JSON.stringify({
        error: 'Failed to check system status',
        timestamp: new Date().toISOString(),
        overall_status: 'unknown'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
};