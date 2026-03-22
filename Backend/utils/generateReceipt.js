import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 🔥 FIX: get true directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function generateReceipt(donation) {
  const receiptsDir = path.join(process.cwd(), "receipts");

  if (!fs.existsSync(receiptsDir)) {
    fs.mkdirSync(receiptsDir);
  }

  const filePath = path.join(
    receiptsDir,
    `receipt-${donation._id}.pdf`
  );

  const doc = new PDFDocument({ margin: 60 });

  doc.pipe(fs.createWriteStream(filePath));

  /* =========================
     HEADER
  ========================= */

  doc
    .fontSize(16)
    .text("OFFICIAL DONATION RECEIPT", { align: "left" });

  doc.moveDown(0.5);

  doc
    .fontSize(12)
    .text("SHOOVA INITIATIVE CORPORATION")
    .text("EIN: 41-4001369");

  doc.moveDown();

  doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

  doc.moveDown();

  /* =========================
     DONOR INFORMATION
  ========================= */

  doc.fontSize(12).text("DONOR INFORMATION", { underline: true });

  doc.moveDown(0.5);

  doc.text(`Name: ${donation.name || "_________________________"}`);
  doc.text(`Address: ${donation.address || "_________________________"}`);
  doc.text(
    `Date of Contribution: ${new Date(
      donation.createdAt
    ).toLocaleDateString()}`
  );

  doc.moveDown();

  /* =========================
     CONTRIBUTION DETAILS
  ========================= */

  doc.fontSize(12).text("CONTRIBUTION DETAILS", { underline: true });

  doc.moveDown(0.5);

  doc.text(
    `Cash/Check/Electronic Amount: $${Number(donation.amount).toLocaleString()}`
  );

  doc.text(
    `Description of Non-Cash Gift (if applicable): ${
      donation.description || "N/A"
    }`
  );

  doc.moveDown();

  /* =========================
     TAX STATUS
  ========================= */

  doc.fontSize(12).text("TAX-EXEMPT STATUS", { underline: true });

  doc.moveDown(0.5);

  doc.fontSize(11).text(
    "Shoova Initiative Corporation is a nonprofit organization exempt from federal income tax under Internal Revenue Code (IRC) Section 501(c)(3). We are further classified as a public charity under Section 170(b)(1)(A)(vi).",
    { align: "left" }
  );

  doc.moveDown();

  /* =========================
     IRS DISCLOSURE
  ========================= */

  doc.fontSize(12).text("IRS REQUIRED DISCLOSURE", { underline: true });

  doc.moveDown(0.5);

  doc.fontSize(11).text(
    "In accordance with IRS requirements, we confirm that no goods or services were provided by Shoova Initiative Corporation in exchange for this contribution. Therefore, the full amount of your gift is deductible to the extent allowed by law.",
    { align: "left" }
  );

  doc.moveDown();

  /* =========================
     THANK YOU MESSAGE
  ========================= */

  doc.fontSize(12).text('THANK YOU FOR SAYING "RESTORE!"', {
    underline: true,
  });

  doc.moveDown(0.5);

  doc.fontSize(11).text(
    "Your seed funding is directly fueling the development of our 8-acre campus in the Eastern Region of Ghana. Because of your generosity, a new generation of scholars is moving from the 'holes and prisons' of illegal mining into the dignity of technical engineering and sustainable restoration."
  );

  doc.moveDown(2);

  /* =========================
     SIGNATURE (FIXED)
  ========================= */

  const signaturePath = path.join(
    __dirname,
    "../../public/assets/signature.png"
  );

  console.log("Looking here:", signaturePath);
  console.log("Exists:", fs.existsSync(signaturePath));

  doc.moveDown(1);
  doc.fontSize(12).text("Authorized Signature:");
  doc.moveDown(0.5);

  if (fs.existsSync(signaturePath)) {
    const sigY = doc.y;

    doc.image(signaturePath, doc.x, sigY, {
      width: 170,
    });

    doc.y = sigY + 70;
  } else {
    doc.text("___________________________");
  }

  doc.moveDown(0.8);
  doc.fontSize(11).text("William Agyekum, President");

  doc.end();

  return filePath;
}