import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export default function generateReceipt(donation) {
  return new Promise((resolve, reject) => {
    const receiptsDir = path.join(process.cwd(), "receipts");

    if (!fs.existsSync(receiptsDir)) {
      fs.mkdirSync(receiptsDir);
    }

    const filePath = path.join(
      receiptsDir,
      `receipt-${donation._id}.pdf`
    );

    const doc = new PDFDocument({ margin: 60 });
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    /* =========================
       HEADER
    ========================= */
    doc
      .fontSize(16)
      .text("OFFICIAL DONATION RECEIPT", { align: "left" });

    doc.moveDown(0.5);

    doc
      .fontSize(12)
      .text("Shoova Initiative Corporation")
      .text("A 501(c)(3) Public Charity")
      .text("EIN: 41-4001369");

    doc.moveDown();

    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();

    doc.moveDown();

    /* =========================
       DONOR INFO
    ========================= */
    doc.fontSize(12).text("DONOR INFORMATION", { underline: true });

    doc.moveDown(0.5);

    doc.text(`Name: ${donation.name || "________________"}`);
    doc.text(`Address: ${donation.address || "________________"}`);
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
      `Cash Contribution: $${Number(donation.amount).toLocaleString()}`
    );

    doc.text(
      `Non-Cash Contribution: ${donation.description || "N/A"}`
    );

    doc.moveDown();

    /* =========================
       TAX STATUS
    ========================= */
    doc.fontSize(12).text("TAX-EXEMPT STATUS", { underline: true });

    doc.moveDown(0.5);

    doc.fontSize(11).text(
      "Shoova Initiative Corporation is a nonprofit organization exempt from federal income tax under IRC Section 501(c)(3). Contributions are tax-deductible to the extent permitted by law."
    );

    doc.moveDown();

    /* =========================
       IRS DISCLOSURE
    ========================= */
    doc.fontSize(12).text("IRS DISCLOSURE", { underline: true });

    doc.moveDown(0.5);

    doc.fontSize(11).text(
      "No goods or services were provided in exchange for this contribution."
    );

    doc.moveDown();

    /* =========================
       MESSAGE
    ========================= */
    doc.fontSize(12).text("THANK YOU FOR SAYING 'RESTORE!'", {
      underline: true,
    });

    doc.moveDown(0.5);

    doc.fontSize(11).text(
      "Your support is directly helping restore degraded lands and empower the next generation."
    );

    doc.moveDown(2);

    /* =========================
       SIGNATURE
    ========================= */
    const signaturePath = path.join(process.cwd(), "assets", "signature.png");

    doc.text("Authorized Signature:");
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
    doc.text("William Agyekum, President");

    doc.end();

    // 🔥 CRITICAL: wait for file to finish writing
    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
}
