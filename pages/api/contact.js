export default async function sendEmail(req, res) {
  const human = await humanCheck(req.body.token);

  if (!human) {
    res.status(400).end();
  } else {
    //load nodemailer and define its transporter
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "jeb.gengenagel@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
      secure: true,
    });

    //creating the mailData
    const mailData = {
      from: "jeb.gengenagel@gmail.com",
      to: "jpwallace22@gmail.com",
      subject: `BetterMind message from ${req.body.fname} ${req.body.lname}`,
      text: `${req.body.fname} ${req.body.lname} is interested in ${req.body.service} therapy. Contact them at ${req.body.phone} or ${req.body.email}`,
      // html: <div>{req.body}</div>,
    };

    //send it!
    transporter.sendMail(mailData, function (err, info) {
      if (err) res.status(400).end();
      else res.status(200).end();
    });
  }
}

// helper function to check the token with google
async function humanCheck(token) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_KEY}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  return data.success;
}
