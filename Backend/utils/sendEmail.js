import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, html) => {
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
     user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  try {
    
    const info= await transporter.sendMail({
      from: `"Shoova Initiative" <essumanarthur24@gmail.com>`,
      to,
      subject,
      html
    });
    console.log("📨 Email sent:", info.messageId);

  } catch (error) {
    console.error("❌ Email send failed:", error);
    throw error;

  }


};