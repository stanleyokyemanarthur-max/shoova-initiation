import nodemailer from "nodemailer";
import generateReceipt from "./generateReceipt.js";

export const sendReceipt = async ({
  email,
  amount,
  donationId,
  name,
  address = "N/A" // fallback if not provided
}) => {
  try {
    /* =========================
       VALIDATION
    ========================= */
    if (!email || !amount || !donationId) {
      throw new Error("Missing required donation fields");
    }

    const firstName = name?.split(" ")[0] || "Supporter";

    /* =========================
       TRANSPORTER
    ========================= */
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  connectionTimeout: 10000, // 🔥 prevent hanging
  greetingTimeout: 10000,
  socketTimeout: 10000
});

    /* =========================
       GENERATE RECEIPT PDF
    ========================= */
    const receiptPath = generateReceipt({
      _id: donationId,
      email,
      name,
      address,
      amount,
      donationType: "donation",
      createdAt: new Date()
    });

    /* =========================
       EMAIL CONTENT
    ========================= */
    const formattedAmount = Number(amount).toLocaleString();

    const mailOptions = {
      from: `"Shoova Restoration Initiative" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Official Donation Receipt – Shoova Initiative",

      html: `
        <h2>Thank you for your support 🌱</h2>

        <p>Dear ${firstName},</p>

        <p>
          We sincerely appreciate your generous contribution of 
          <strong>$${formattedAmount}</strong> to the Shoova Initiative.
        </p>

        <p>
          Your support is directly helping restore degraded lands and 
          empower the next generation through education and innovation.
        </p>

        <hr/>

        <h3>Donation Summary</h3>

        <p><strong>Donation ID:</strong> ${donationId}</p>
        <p><strong>Amount:</strong> $${formattedAmount}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>

        <p>
          Please find your official IRS-compliant donation receipt attached 
          as a PDF for your records.
        </p>

        <br/>

        <p>
          With gratitude,<br/>
          <strong>Shoova Initiative</strong>
        </p>
      `,

      attachments: [
        {
          filename: `Shoova-Receipt-${donationId}.pdf`,
          path: receiptPath
        }
      ]
    };

    /* =========================
       SEND EMAIL
    ========================= */
    await transporter.sendMail(mailOptions);

    console.log("✅ Receipt sent to:", email);

    return { success: true };
  } catch (error) {
    console.error("❌ Error sending receipt:", error.message);

    return {
      success: false,
      error: error.message
    };
  }
};
