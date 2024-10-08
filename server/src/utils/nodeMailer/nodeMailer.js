import nodemailer from "nodemailer";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

export default async function sendMail(email, verificationToken) {
  
      

    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: "Shashanknegi@pearlorganisation.com",
        pass: "bcvykbxescihajtx",
      },
    });

    // Construct the verification URL with the token as a query parameter
    const verificationUrl = `${process.env.BASE_URL}/api/v1/verify/${verificationToken}`;
    const templatePath = path.join(__dirname, `../views/verification.ejs`);
    
    console.log(templatePath+" hey there !!");

    let data = await ejs.renderFile(templatePath, { email, verificationUrl });


    // Customize the text or HTML content to include the verification link
    const mailOptions = {
      from: "Shashanknegi@pearlorganisation.com",
      to: email,
      subject: "Verify Your Email",
      html:data,
    };

    // Send the email

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        } else {
          return resolve("Mail Sent Successfully" + info.response);
        }
      });
    });

  
}
