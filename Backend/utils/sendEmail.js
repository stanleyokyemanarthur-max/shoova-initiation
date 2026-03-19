import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "essumanarthur24@gmail.com",
    pass: "iojp wolh ffas edac"
  }
});

export const sendEmail = async (to, subject, html) => {
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