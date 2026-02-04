#!/usr/bin/env node
/**
 * Valentine Response → WhatsApp Forwarder
 * Monitors ntfy.sh and sends WhatsApp via Clawdbot when Adufe says YES
 * 
 * Usage: node valentine-whatsapp-forwarder.js
 */

const https = require('https');
const { exec } = require('child_process');

const NTFY_TOPIC = 'praise-valentine-4her';
const PHONE = '+9898540352';

console.log('💜 Valentine → WhatsApp Forwarder Started');
console.log(`📡 Monitoring: https://ntfy.sh/${NTFY_TOPIC}`);
console.log(`📱 Will send WhatsApp to: ${PHONE}`);
console.log('⏳ Waiting for Adufe to respond...\n');

let notificationSent = false;

// Function to send WhatsApp message
function sendWhatsApp(message) {
  if (notificationSent) return;
  
  console.log('\n🎉 ===========================');
  console.log('   ADUFE SAID YES!');
  console.log('===========================\n');
  console.log('📱 Sending WhatsApp...\n');
  
  // Use Clawdbot to send WhatsApp
  const command = `clawdbot message send --channel=whatsapp --target="${PHONE}" --message="${message}"`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Failed to send WhatsApp:', error.message);
      console.log('💡 Make sure Clawdbot WhatsApp is configured');
      console.log(`   You can manually send: "${message}"\n`);
    } else {
      console.log('✅ WhatsApp notification sent!');
      console.log(`📬 Message: ${message}\n`);
      notificationSent = true;
      
      console.log('🎊 Success! You can stop this monitor now (Ctrl+C)');
      console.log('   Or leave it running to catch additional responses.\n');
    }
  });
}

// Subscribe to ntfy.sh SSE stream
const options = {
  hostname: 'ntfy.sh',
  path: `/${NTFY_TOPIC}/sse`,
  method: 'GET',
  headers: {
    'Accept': 'text/event-stream'
  }
};

function connect() {
  console.log('🔌 Connecting to ntfy.sh...');
  
  const req = https.request(options, (res) => {
    console.log('✅ Connected! Listening for responses...\n');
    
    res.on('data', (chunk) => {
      const data = chunk.toString();
      
      // Check if this is a Valentine "Yes" response
      if (data.includes('SHE SAID YES')) {
        const message = '💜 SHE SAID YES! Adufe just accepted to be your Valentine! 🎉';
        sendWhatsApp(message);
      }
    });
    
    res.on('end', () => {
      console.log('⚠️  Connection ended. Reconnecting in 5 seconds...');
      setTimeout(connect, 5000);
    });
  });
  
  req.on('error', (error) => {
    console.error('❌ Connection error:', error.message);
    console.log('🔄 Retrying in 10 seconds...\n');
    setTimeout(connect, 10000);
  });
  
  req.end();
}

// Start monitoring
connect();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Monitor stopped. Have a great Valentine\'s Day!');
  process.exit(0);
});
