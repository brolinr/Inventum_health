import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_ADDRESS,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false,
  auth: {
    user: process.env.DELIVERY_SUPPORT_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, additional_message } = req.body;

      const info = await transporter.sendMail({
        from: `"Your Company" <${process.env.DELIVERY_SUPPORT_EMAIL}>`,
        to: process.env.DELIVERY_SUPPORT_EMAIL,
        subject: 'New Contact Message',
        html: `
          <h3>Contact Details:</h3>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
          </ul>
          <h3>Message:</h3>
          <p>${additional_message}</p>
        `,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
