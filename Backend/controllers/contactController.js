import nodemailer from "nodemailer";


export const sendContactEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Shoova Website" <essumanarthur24@gmail.com>`,
      to: "stanleyokyemanarthur@gmail.com",

    
      replyTo: email,

      subject: `New Contact: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/> ${message}</p>
        </div>
      `,
    });

    res.json({ success: true });

  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false });
  }
};