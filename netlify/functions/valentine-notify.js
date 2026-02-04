// Netlify Function: Valentine Response Notification
// Sends WhatsApp message to Praise when Adufe clicks "Yes"

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Log the response
    console.log('💜 Valentine Response Received:', {
      timestamp: data.timestamp,
      source: data.source
    });

    // Send WhatsApp notification via Clawdbot
    // You'll need to set this up in Clawdbot's config
    const response = await fetch('https://api.clawdbot.com/v1/message/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CLAWDBOT_TOKEN}` // Set this in Netlify env vars
      },
      body: JSON.stringify({
        channel: 'whatsapp',
        to: '+9898540352',
        message: '💜 SHE SAID YES! Adufe just accepted to be your Valentine! 🎉'
      })
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Notification sent!'
      })
    };

  } catch (error) {
    console.error('Error sending notification:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send notification',
        details: error.message 
      })
    };
  }
};
