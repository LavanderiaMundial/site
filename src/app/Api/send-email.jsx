import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'hebertdev82@gmail.com',
            pass: 'qa3JIv7r22#2021'
        },
    });

    const mailOptions = {
        from: 'hebertdev82@gmail.com',
        to,
        subject,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
}
