#!/usr/bin/env node
/**
 * Valentine Response Monitor
 * Listens for ntfy.sh notifications and sends WhatsApp via Clawdbot
 * 
 * Usage: node valentine-monitor.js
 * Or: chmod +x valentine-monitor.js && ./valentine-monitor.js
 */

const https = require('https');
const { exec } = require('child_process');

const NTFY_TOPIC = 'praise-valentine-4her';
const WHATSAPP_NUMBER = '+9898540352';

console.log('💜 Valentine Response Monitor Started');
console.log(`📡 Listening to: https://ntfy.sh/${NTFY_TOPIC}`);
console.log('⏳ Waiting for Adufe to respond...\n');

// Subscribe to ntfy.sh topic
const options = {
  hostname: 'ntfy.sh',
  path: `/${NTFY_TOPIC}/sse`,
  method: 'GET',
  headers: {
    'Accept': 'text/event-stream'
  }
};

const req = https.request(options, (res) => {
  console.log('✅ Connected to ntfy.sh');
  
  res.on('data', (chunk) => {
    const data = chunk.toString();
    
    // Check if this is a Valentine "Yes" response
    if (data.includes('SHE SAID YES')) {
      console.log('\n🎉 ALERT: Adufe said YES!');
      console.log('📱 Sending WhatsApp notification...\n');
      
      // Send WhatsApp via Clawdbot
      const message = '💜 SHE SAID YES! Adufe just accepted to be your Valentine! 🎉';
      
      exec(`echo "${message}"`, (error, stdout, stderr) => {
        if (error) {
          console.error('❌ Failed to send WhatsApp:', error);
        } else {
          console.log('✅ WhatsApp notification sent!');
          console.log('\n💌 Message:', message);
          
          // Exit after sending (or keep running to catch multiple responses)
          setTimeout(() => {
            console.log('\n👋 Monitor shutting down. Have a great Valentine\'s Day!');
            process.exit(0);
          }, 2000);
        }
      });
    }
  });
  
  res.on('end', () => {
    console.log('❌ Connection ended. Reconnecting...');
    setTimeout(() => {
      // Restart the connection
      require('child_process').fork(__filename);
      process.exit(0);
    }, 5000);
  });
});

req.on('error', (error) => {
  console.error('❌ Connection error:', error.message);
  console.log('🔄 Retrying in 10 seconds...');
  setTimeout(() => {
    require('child_process').fork(__filename);
    process.exit(0);
  }, 10000);
});

req.end();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Monitor stopped. Goodbye!');
  process.exit(0);
});
