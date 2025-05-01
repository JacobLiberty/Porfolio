import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate environment variables
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      )
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${emailUser}>`,
      to: 'jacob.tobin.liberty@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #4a5568;">New Contact Form Submission</h2>
  <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p style="light-space: pre-wrap;">${message}</p>
  </div>
</div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Return a more specific error message
    const errorMessage = error instanceof Error 
      ? error.message
      : 'An unexpected error occurred'

    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: errorMessage
      },
      { status: 500 }
    )
  }
} 