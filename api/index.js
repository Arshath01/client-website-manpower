import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Category from "./models/category.js";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;
const URI =
  "mongodb+srv://amogam:123@cluster0.y3kzvib.mongodb.net/?retryWrites=true&w=majority";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log("error in connection", err));

app.get("/", (req, res) => {
  res.send("Backed Api");
});

app.get("/admin", async (req, res) => {
  const response = await Category.find();
  console.log(response);
  res.status(200).json(response);
});
app.delete("/admin/removeService/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Category.findByIdAndDelete({ _id: id })
    .then((response) => res.status(200).json(response))
    .catch((err) => console.log(err));
});
app.post("/admin/addService", (req, res) => {
  console.log(req.body);
  const {
    homeHeading,
    homeDescription,
    homeBannerImg,
    bannerImg,
    heading,
    subHeading,
    subCategory,
    description,
  } = req.body;

  const response = new Category({
    homeDescription: homeDescription,
    homeHeading: homeHeading,
    homeBannerImg: homeBannerImg,
    heading: heading,
    subHeading: subHeading,
    description: description,
    subCategory: subCategory,
    bannerImg: bannerImg,
  });
  response
    .save()
    .then(() => res.status(200).json("data saved"))
    .catch((err) => console.log("error in saving", err));
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.post("/sendMail", (req, res) => {
  const formData = req.body;

  const { name, email, mobile, description, serviceType, date } = formData;

  const senderEmail = "amogamcleancare@gmail.com";

  
  let emailContent = `Name: ${name}\nEmail Id: ${email}\nMobile Number: ${mobile}\nDescription: ${description}`;

  if (serviceType) {
    emailContent += `\nService Type: ${serviceType}`;
  }

  if (date) {
    emailContent += `\nDate: ${date}`;
  }

  const mailOptions = {
    from: senderEmail,
    to: senderEmail, 
    subject: "Form Submission",
    text: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Form submitted successfully!");
    }
  });
});

app.get("/fetchData/:id", async (req, res) => {
  const id = req.params.id;

  await Category.findById(id)
    .then((resp) => res.status(200).json(resp))
    .catch((err) => console.log(err));
});
app.listen(PORT, () => {
  console.log("server is runnning in the port :", PORT);
});
