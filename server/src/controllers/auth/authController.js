import User from "../../models/user/user.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { COOKIE_OPTIONS } from "../../../constants.js";
import { genRefreshToken } from "../../config/genRefreshToken.js";
import { genToken } from "../../config/genToken.js";
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

export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;

  const findUser = await User.findOne({ email });

  if (!findUser) {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
      success: true,
    });
  } else {
    throw new Error("User already exists");
  }
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

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });

  if (findUser && (await findUser.isPasswordCorrect(password))) {
    const refreshToken = genRefreshToken(findUser?._id, findUser?.email);

    const updateUser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );

    res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);

    const data = {
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      token: genToken(findUser?._id),
    };

    res
      .status(200)
      .json({ success: true, message: "Logged in successfully" });
  } else {
    throw new Error("Invalid Credentails");
  }
});

export const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in cookies");

  const refreshToken = cookie.refreshToken;
  console.log("My Refresh Token", refreshToken);

  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", COOKIE_OPTIONS);
    return res.status(204).json({ message: "Forbidden" });
  }

  await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  // console.log("My Refresh Token after logout", refreshToken);
  return res.status(204).json({ message: "Logged put Successfully" });
});

export const profile = asyncHandler(async (req, res) => {
  const user = req.user;
 

  res.status(200).json({
    success: true,
    message: "The Profile of Logged In User",
    data: {

      email : user.email,
      firstName: user.firstName,
      lastName: user.lastName
    },
  });
});
