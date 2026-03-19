import nodemailer from "nodemailer";
import generateReceipt from "./generateReceipt.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "essumanarthur24@gmail.com",
    pass: "iojp wolh ffas edac"
  }
});

export const sendReceipt = async (email, amount, donationId) => {

  // create the PDF receipt
  const receiptPath = generateReceipt({
    _id: donationId,
    email,
    amount,
    donationType: "donation",
    createdAt: new Date()
  });

  const mailOptions = {
    from: `"Shoova Restoration Initiative" <essumanarthur24@gmail.com>`,
    to: email,
    subject: "Thank you for supporting Shoova 🌱",

    html: `
      <h2>Thank you for your donation!</h2>

      <p>Dear supporter,</p>

      <p>
      Thank you for your generous donation of <strong>$${amount}</strong>
      to the Shoova Restoration Initiative.
      </p>

      <p>
      Your contribution helps restore land affected by illegal mining
      and train the next generation of environmental engineers.
      </p>

      <hr/>

      <h3>Donation Details</h3>

      <p><strong>Donation ID:</strong> ${donationId}</p>
      <p><strong>Amount:</strong> $${amount}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>

      <p>
      With gratitude,<br/>
      <strong>Shoova Restoration Initiative</strong>
      </p>
    `,

    attachments: [
      {
        filename: `Shoova-Receipt-${donationId}.pdf`,
        path: receiptPath
      }
    ]
  };

  await transporter.sendMail(mailOptions);
};