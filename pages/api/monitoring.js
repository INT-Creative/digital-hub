// INT Creative AI Monitoring API Endpoint
// Brand Colors: Forest Green #0F2F20, Gold Ochre #C29D49
// Version: 1.0
// Created: September 1, 2025

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import { existsSync } from 'fs';
import net from 'net';

const execAsync = promisify(exec);

// Function to check if port is open
const checkPort = (port, host = 'localhost') => {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const timeout = 1000; // 1 second timeout
    
    socket.setTimeout(timeout);
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    
    socket.on('error', () => {
      resolve(false);
    });
    
    socket.connect(port, host);
  });
};

// Function to get system info
const getSystemInfo = async () => {
  try {
    const [uptimeResult, memoryResult, diskResult] = await Promise.all([
      execAsync('uptime'),
      execAsync('free -h'),
      execAsync('df -h /')
    ]);
    
    // Parse uptime
    const uptimeMatch = uptimeResult.stdout.match(/up\s+([^,]+)/);
    const uptime = uptimeMatch ? uptimeMatch[1].trim() : 'Unknown';
    
    // Parse load average
    const loadMatch = uptimeResult.stdout.match(/load average: ([0-9.]+)/);
    const loadAverage = loadMatch ? parseFloat(loadMatch[1]) : 0;
    
    // Parse memory
    const memoryLines = memoryResult.stdout.split('\n');
    const memoryLine = memoryLines.find(line => line.startsWith('Mem:'));
    const memoryParts = memoryLine.split(/\s+/);
    const memoryUsed = memoryParts[2];
    const memoryTotal = memoryParts[1];
    
    // Parse disk
    const diskLines = diskResult.stdout.split('\n');
    const diskLine = diskLines[1]; // Skip header
    const diskParts = diskLine.split(/\s+/);
    const diskUsed = diskParts[2];
    const diskTotal = diskParts[1];
    const diskPercent = diskParts[4];
    
    return {
      uptime,
      loadAverage,
      memory: {
        used: memoryUsed,
        total: memoryTotal
      },
      disk: {
        used: diskUsed,
        total: diskTotal,
        percent: diskPercent
      }
    };
  } catch (error) {
    console.error('Error getting system info:', error);
    return {
      uptime: 'Unknown',
      loadAverage: 0,
      memory: { used: 'Unknown', total: 'Unknown' },
      disk: { used: 'Unknown', total: 'Unknown', percent: 'Unknown' }
    };
  }
};

// Function to check processes
const checkProcesses = async () => {
  try {
    const processes = {};
    
    // Check Claude Code
    try {
      const claudeResult = await execAsync('pgrep -c claude');
      processes.claude = {
        running: parseInt(claudeResult.stdout.trim()) > 0,
        count: parseInt(claudeResult.stdout.trim())
      };
    } catch {
      processes.claude = { running: false, count: 0 };
    }
    
    // Check Node.js processes
    try {
      const nodeResult = await execAsync('pgrep -c node');
      processes.node = {
        running: parseInt(nodeResult.stdout.trim()) > 0,
        count: parseInt(nodeResult.stdout.trim())
      };
    } catch {
      processes.node = { running: false, count: 0 };
    }
    
    // Check Docker
    try {
      const dockerResult = await execAsync('docker ps --format "{{.Names}}" | wc -l');
      processes.docker = {
        running: parseInt(dockerResult.stdout.trim()) > 0,
        containers: parseInt(dockerResult.stdout.trim())
      };
    } catch {
      processes.docker = { running: false, containers: 0 };
    }
    
    return processes;
  } catch (error) {
    console.error('Error checking processes:', error);
    return {};
  }
};

// Function to get Ollama status
const getOllamaStatus = async () => {
  try {
    // Check if Ollama port is open
    const isRunning = await checkPort(11434);
    
    if (isRunning) {
      try {
        // Try to get model list
        const modelsResult = await execAsync('ollama list');
        const models = modelsResult.stdout
          .split('\n')
          .slice(1) // Skip header
          .filter(line => line.trim())
          .map(line => line.split(/\s+/)[0]);
        
        return {
          running: true,
          models: models.length > 0 ? models : []
        };
      } catch {
        return { running: true, models: [] };
      }
    } else {
      return { running: false, models: [] };
    }
  } catch (error) {
    console.error('Error checking Ollama:', error);
    return { running: false, models: [] };
  }
};

// Main API handler
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  
  try {
    const startTime = Date.now();
    
    // Define services to check (updated with website integration)
    const services = [
      { name: 'intcreative-hub', port: 4321, priority: 'critical', category: 'website' },
      { name: 'Luis Construction Main', port: 4322, priority: 'high', category: 'client' },
      { name: 'Luis Drywall', port: 4323, priority: 'high', category: 'client' },
      { name: 'In-Vizon AI', port: 8000, priority: 'high', category: 'ai' },
      { name: 'N8N Automation', port: 5678, priority: 'medium', category: 'automation' },
      { name: 'Next.js Dev', port: 3000, priority: 'medium', category: 'development' },
      { name: 'Plane Project', port: 3001, priority: 'low', category: 'infrastructure' },
      { name: 'Authentik SSO', port: 3002, priority: 'low', category: 'infrastructure' },
      { name: 'Uptime Kuma', port: 3004, priority: 'medium', category: 'infrastructure' },
      { name: 'Listmonk Email', port: 3005, priority: 'low', category: 'infrastructure' },
      { name: 'Plausible Analytics', port: 3006, priority: 'low', category: 'infrastructure' },
      { name: 'Ollama', port: 11434, priority: 'medium', category: 'ai' }
    ];
    
    // Check all services in parallel
    const serviceChecks = await Promise.all(
      services.map(async (service) => {
        const isRunning = await checkPort(service.port);
        return {
          name: service.name,
          port: service.port,
          priority: service.priority,
          status: isRunning ? 'running' : 'stopped',
          url: `http://localhost:${service.port}`
        };
      })
    );
    
    // Get additional system information
    const [systemInfo, processes, ollamaStatus] = await Promise.all([
      getSystemInfo(),
      checkProcesses(),
      getOllamaStatus()
    ]);
    
    // Calculate service stats
    const runningServices = serviceChecks.filter(s => s.status === 'running').length;
    const totalServices = serviceChecks.length;
    const criticalRunning = serviceChecks.filter(s => s.priority === 'critical' && s.status === 'running').length;
    const criticalTotal = serviceChecks.filter(s => s.priority === 'critical').length;
    const highPriorityRunning = serviceChecks.filter(s => s.priority === 'high' && s.status === 'running').length;
    const highPriorityTotal = serviceChecks.filter(s => s.priority === 'high').length;
    
    // Website-specific stats
    const websiteServices = serviceChecks.filter(s => s.category === 'website');
    const clientServices = serviceChecks.filter(s => s.category === 'client');
    const aiServices = serviceChecks.filter(s => s.category === 'ai');
    
    // Determine overall status
    let overallStatus = 'critical';
    if (runningServices === totalServices) {
      overallStatus = 'healthy';
    } else if (runningServices >= totalServices * 0.7) {
      overallStatus = 'warning';
    }
    
    // Check if monitoring script exists and get last run info
    const monitoringScriptPath = '/home/intadmin/INT-Creative/DEVELOPMENT/monitoring/ai-agents-monitor.sh';
    const logPath = '/home/intadmin/INT-Creative/logs/ai-monitor.log';
    
    let lastMonitoringRun = null;
    if (existsSync(logPath)) {
      try {
        const logContent = await fs.readFile(logPath, 'utf8');
        const lines = logContent.split('\n');
        const lastLine = lines[lines.length - 2] || lines[lines.length - 1]; // Get last non-empty line
        if (lastLine) {
          const timestampMatch = lastLine.match(/\[([\d\-\s:]+)\]/);
          if (timestampMatch) {
            lastMonitoringRun = timestampMatch[1];
          }
        }
      } catch (error) {
        console.error('Error reading monitoring log:', error);
      }
    }
    
    // Response data
    const responseData = {
      timestamp: new Date().toISOString(),
      responseTime: Date.now() - startTime,
      status: overallStatus,
      summary: {
        totalServices,
        runningServices,
        stoppedServices: totalServices - runningServices,
        criticalRunning,
        criticalTotal,
        highPriorityRunning,
        highPriorityTotal,
        categories: {
          website: {
            total: websiteServices.length,
            running: websiteServices.filter(s => s.status === 'running').length
          },
          client: {
            total: clientServices.length,
            running: clientServices.filter(s => s.status === 'running').length
          },
          ai: {
            total: aiServices.length,
            running: aiServices.filter(s => s.status === 'running').length
          }
        }
      },
      services: serviceChecks,
      system: systemInfo,
      processes,
      ollama: ollamaStatus,
      monitoring: {
        scriptExists: existsSync(monitoringScriptPath),
        lastRun: lastMonitoringRun,
        logPath: existsSync(logPath) ? logPath : null
      },
      quickActions: {
        startAll: '/home/intadmin/INT-Creative/DEVELOPMENT/scripts/activate-all.sh',
        monitor: '/home/intadmin/INT-Creative/DEVELOPMENT/monitoring/ai-agents-monitor.sh',
        logs: '/home/intadmin/INT-Creative/logs/'
      },
      branding: {
        company: 'INT Creative',
        website: {
          name: 'intcreative-hub',
          production: 'https://intcreative-hub.vercel.app',
          local: 'http://localhost:4321'
        },
        colors: {
          primary: '#0F2F20', // Forest Green
          accent: '#C29D49'   // Gold Ochre
        }
      }
    };
    
    res.status(200).json(responseData);
    
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}