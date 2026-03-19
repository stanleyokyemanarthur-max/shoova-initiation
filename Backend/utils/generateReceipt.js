import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export default function generateReceipt(donation) {

  const receiptsDir = path.join(process.cwd(), "receipts");

  if (!fs.existsSync(receiptsDir)) {
    fs.mkdirSync(receiptsDir);
  }

  const filePath = path.join(receiptsDir, `receipt-${donation.donationNumber}.pdf`);

  const doc = new PDFDocument({ margin: 60 });

  doc.pipe(fs.createWriteStream(filePath));

  /* LOGO */

  const logoPath = path.join(process.cwd(), "assets", "logoo.png");

  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 250, 45, { width: 100 });
  }

  doc.moveDown(4);

  /* HEADER */

  doc
    .fontSize(24)
    .text("Shoova Initiative", { align: "center" });

  doc
    .fontSize(12)
    .fillColor("#555")
    .text("Restoring Lives. Restoring Lands", { align: "center" });

  doc.moveDown();

  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  doc.moveDown();

  /* TITLE */

  doc
    .fillColor("#000")
    .fontSize(18)
    .text("Donation Receipt");

  doc.moveDown();

  /* RECEIPT INFO */

  doc.fontSize(12);

  doc.text(`Donation Number: ${donation.donationNumber || donation._id}`);
  doc.text(`Date: ${new Date(donation.createdAt).toDateString()}`);

  doc.moveDown();

  /* DONOR INFO */

  doc.fontSize(14).text("Donor Information");
  doc.moveDown(0.5);

  doc.fontSize(12);
  doc.text(`Email: ${donation.email}`);

  doc.moveDown();

  /* DONATION DETAILS */

  doc.fontSize(14).text("Donation Details");
  doc.moveDown(0.5);

  doc.fontSize(12);
  doc.text(`Amount: $${donation.amount}`);
  doc.text(`Donation Type: ${donation.donationType}`);

  doc.moveDown();

  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  doc.moveDown();

  /* MESSAGE */

  doc.fontSize(12).text(
    "Thank you for supporting environmental restoration, community empowerment, and sustainable livelihoods through Shoova Initiative."
  );

  doc.moveDown(2);

  /* FOOTER */

  doc.fontSize(10)
    .fillColor("#555")
    .text("Shoova Initiative")
    .text("Accra, Ghana")
    .text("info@shoova.org");

  doc.end();

  return filePath;
}