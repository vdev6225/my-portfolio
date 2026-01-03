'use server'

import nodemailer from 'nodemailer'

const action = async (_, formData) => {
  try {
    // 1. Validate Input
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    let subject = formData.get('subject')
    if (!subject || subject.trim() === '') {
      subject = 'Portfolio Contact Form Submission'
    }

    if (!name || !email || !message) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
      }
    }

    // 2. Setup Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 3. The "Cyberpunk/Dev" Email Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #0a192f; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        
        <div style="width: 100%; background-color: #0a192f; padding: 40px 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #112240; border-radius: 12px; border: 1px solid #233554; overflow: hidden; box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7);">
            
            <div style="background-color: #112240; padding: 30px 40px; text-align: center; border-bottom: 3px solid #18f2e5;">
              <h1 style="color: #e6f1ff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">New Inquiry</h1>
              <p style="color: #18f2e5; margin: 8px 0 0 0; font-family: 'Courier New', monospace; font-size: 14px;">// Portfolio Website</p>
            </div>

            <div style="padding: 40px;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td width="50%" style="padding-bottom: 20px;">
                    <p style="margin: 0; color: #18f2e5; font-family: 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                    <p style="margin: 5px 0 0 0; color: #ccd6f6; font-size: 16px; font-weight: 600;">${name}</p>
                  </td>
                  <td width="50%" style="padding-bottom: 20px;">
                     <p style="margin: 0; color: #18f2e5; font-family: 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Reply To</p>
                     <a href="mailto:${email}" style="margin: 5px 0 0 0; display: block; color: #ccd6f6; font-size: 16px; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                     <p style="margin: 0; color: #18f2e5; font-family: 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                     <p style="margin: 5px 0 0 0; color: #e6f1ff; font-size: 18px; font-weight: 500;">${subject}</p>
                  </td>
                </tr>
              </table>

              <div style="border-top: 1px solid #233554; margin: 10px 0 30px 0;"></div>

              <p style="margin: 0 0 10px 0; color: #18f2e5; font-family: 'Courier New', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Message Content</p>
              <div style="background-color: #0a192f; border-left: 4px solid #18f2e5; padding: 25px; border-radius: 4px;">
                 <p style="margin: 0; color: #8892b0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>

            </div>

            <div style="background-color: #020c1b; padding: 20px; text-align: center;">
              <p style="color: #495670; font-size: 12px; margin: 0; font-family: 'Courier New', monospace;">
                Sent via <span style="color: #18f2e5;">Next.js Portfolio</span>
              </p>
            </div>
            
          </div>
        </div>
      </body>
      </html>
    `

    // 4. Send Email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.MY_EMAIL,
      subject: `[Portfolio] ${subject}`,
      html: htmlTemplate, // Use the new HTML template
      text: message, // Fallback for clients that don't render HTML
    })

    return {
      success: true,
      message: 'Thanks! I will get back to you soon.',
    }
  } catch (error) {
    console.error('Nodemailer error:', error)
    return {
      success: false,
      message: 'Server error. Please try again later.',
    }
  }
}

export default action
