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

      subject: `New Contact Message — ${subject || "No Subject"}`,

      html: `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f5f5f5; padding: 40px 20px;">

    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">

      <!-- HEADER -->
      <div style="padding: 20px 30px; border-bottom: 1px solid #eee;">
        <h2 style="margin: 0; font-size: 18px; color: #111;">
          New Contact Message
        </h2>
        <p style="margin: 5px 0 0; font-size: 13px; color: #777;">
          Submitted from Shoova Website
        </p>
      </div>

      <!-- CONTENT -->
      <div style="padding: 25px 30px;">

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">

          <tr>
            <td style="padding: 8px 0; color: #888; width: 120px;">Name</td>
            <td style="padding: 8px 0; color: #111; font-weight: 500;">
              ${firstName} ${lastName}
            </td>
          </tr>

          <tr>
            <td style="padding: 8px 0; color: #888;">Email</td>
            <td style="padding: 8px 0;">
              <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">
                ${email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding: 8px 0; color: #888;">Subject</td>
            <td style="padding: 8px 0; color: #111;">
              ${subject || "—"}
            </td>
          </tr>

        </table>

        <!-- MESSAGE BOX -->
        <div style="margin-top: 20px;">
          <p style="margin-bottom: 8px; color: #888; font-size: 13px;">
            Message
          </p>

          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; color: #222; line-height: 1.6;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>

      </div>

      <!-- FOOTER -->
      <div style="padding: 20px 30px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
        Shoova Restoration Initiative<br/>
        This message was sent via your website contact form.
      </div>

    </div>

  </div>
`});

    res.json({ success: true });

    } catch (error) {
      console.error("Email Error:", error);
      res.status(500).json({ success: false });
    }
  };