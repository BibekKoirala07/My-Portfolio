const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const MONGO_URI =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_MONGO_URI
    : process.env.DEV_MONGO_URI;

const allowedDomains =
  process.env.NODE_ENV === "production"
    ? [process.env.PROD_FRONTEND_URL]
    : [process.env.DEV_FRONTEND_URL];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedDomains.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: allowedDomains,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  message: String,
});

const User = mongoose.model("User", userSchema);

app.post("/contact", async (req, res) => {
  const { username, email, message } = req.body;

  try {
    console.log("username", username, email, message);
    if (!username || !email || !message)
      throw new Error("Please provide all credentails");

    const newUser = new User({ username, email, message });
    await newUser.save();

    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_SENDING_EMAIL_TO,
        pass: process.env.NODEMAILER_SENDING_EMAIL_APPPASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NODEMAILER_SENDING_EMAIL_TO,
      subject: "New Message from my site",
      text: `You have a new message from ${username} (${email}):\n\n${message}`, // Fallback text
      html: `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.5; margin: 20px;">
        <h2 style="color: #333;">You have a new message from your site!</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; background-color: #f9f9f9;">
          ${message}
        </p>
        <p style="color: #777;">This message was sent from your contact form.</p>
      </body>
    </html>
  `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: error.message || "Error sending message." });
  }
});

// Connect to MongoDB using the selected URI
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
