import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      phone,
      number_of_personnel,
      address,
      vision_screening,
      audiometry_test,
      xrays,
      drug_test,
      spirometry,
      fitness_certificate,
      food_handlers,
      equipment_rental,
      env_training,
      additional_message,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_ADDRESS,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      auth: {
        user: process.env.DELIVERY_SUPPORT_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = `
      <h2>New Quotation Request From Customer</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Number of personnel:</strong> ${number_of_personnel}</p>
      <p><strong>Address:</strong> ${address}</p>
      <h3>Services Requested:</h3>
      <ul>
        ${vision_screening ? '<li>Vision screening</li>' : ''}
        ${audiometry_test ? '<li>Audiometry test</li>' : ''}
        ${xrays ? '<li>Xrays</li>' : ''}
        ${drug_test ? '<li>Multi Drug testing</li>' : ''}
        ${spirometry ? '<li>Spirometry test/Lung function testing</li>' : ''}
        ${fitness_certificate ? '<li>Employee Medical Certificate of Fitness</li>' : ''}
        ${food_handlers ? '<li>Food handler examinations</li>' : ''}
        ${equipment_rental ? '<li>Medical screening equipment rental</li>' : ''}
        ${env_training ? '<li>Occupational Health, Safety & Environmental Training</li>' : ''}
      </ul>
      <h3>Additional Message:</h3>
      <p>${additional_message}</p>
    `;

    const mailOptions = {
      from: process.env.DELIVERY_SUPPORT_EMAIL,
      to: process.env.DELIVERY_SUPPORT_EMAIL,
      subject: 'New Quotation Request',
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
