// server.js
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 5000;



const app = express();
const upload = multer();
app.use(cors());
app.get('/',(req,res)=>{
      res.send("hello i am abdul bahad");
})


app.post("/send-email", upload.single("file"), async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bahadabdul539@gmail.com", // Replace with your Gmail
      pass: "lbtk msxr itup depy",    // Use an app password, not your real password
    }
  });

  const mailOptions = {
    from: "bahadabdul539@gmail.com",
    to: "abdulbahad700@gmail.com", // Receiver's email
    subject: "Chatbot Conversation PDF",
    text: "Attached is the chat conversation in PDF format.",
    attachments: [{
      filename: "wezanchat.pdf",
      content: req.file.buffer,
      contentType: "application/pdf"
    }]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Email server running on http://localhost:${PORT}`);
});
