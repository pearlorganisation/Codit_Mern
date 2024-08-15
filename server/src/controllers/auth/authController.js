import User from "../../models/user/user.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiErrorResponse from "../../utils/ApiErrorResponse.js";
import { COOKIE_OPTIONS } from "../../../constants.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendMail from "../../utils/nodeMailer/nodeMailer.js";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));


function generateToken(userData)
{
  return jwt.sign(userData, process.env.JWT_SECRET_KEY, {
    expiresIn: '5min',
  });
}


//Email Verfication Controller
export const verifyMail = asyncHandler(async (req,res,next) =>{

  const decode = jwt.verify(req.params.token, process.env.JWT_SECRET_KEY);
  

  if (!decode) {
    return next(new ApiErrorResponse("Failed to decode token", 401));
  }

    
   
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  } = decode;



  // Ensure all necessary fields are present
  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    return next(new ApiErrorResponse("Incomplete data from token", 400));
  }



  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phoneNumber,
  });

  // Generate tokens for the new user
  const access_token = newUser.generateAccessToken();
  const refresh_token = newUser.generateRefreshToken();

  // Update the user with the refresh token
  newUser.refreshToken = refresh_token;
  await newUser.save({ validateBeforeSave: false });

  // Set cookies and send the response
  res
    .cookie("access_token", access_token, {
      ...COOKIE_OPTIONS,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
    })
    .cookie("refresh_token", refresh_token, {
      ...COOKIE_OPTIONS,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
    })
    .redirect(`${process.env.REACT_PUBLIC_BASE_URL}/`);
});

//SIGNUP Controller
export const signup = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  if (!firstName || !lastName || !email || !password || !phoneNumber) {
    return next(new ApiErrorResponse("All fields are required", 400));
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new ApiErrorResponse("User already exits", 400));
  }

  
  const token =  generateToken({firstName, lastName, email, password, phoneNumber });
  await sendMail(email,token);

 


  res
    .status(200)
    .json({ success: true, message: "Check You Email and verify it !! " });
});

//LOGIN Controller
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req?.body;
  if (!email || !password) {
    return next(new ApiErrorResponse("All fields are required", 400));
  }
  const existingUser = await User.findOne({ email });
  if (!existingUser) return next(new ApiErrorResponse("No user found", 400));

  const isValidPassword = await existingUser.isPasswordCorrect(password);

  if (!isValidPassword) {
    return next(new ApiErrorResponse("Wrong password", 400));
  }

  const access_token = existingUser.generateAccessToken();
  const refresh_token = existingUser.generateRefreshToken();
 
  existingUser.refreshToken = refresh_token;
  await existingUser.save({ validateBeforeSave: false });

  res
    .cookie("access_token", access_token, {
      ...COOKIE_OPTIONS,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), //1day set 15min later on
    })
    .cookie("refresh_token", refresh_token, {
      ...COOKIE_OPTIONS,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15day
    })
    .status(200)
    .json({ success: true, message: "Logged in successfully" });
});
