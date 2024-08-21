import User from "../../models/user/user.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { COOKIE_OPTIONS } from "../../../constants.js";
import { genRefreshToken } from "../../config/genRefreshToken.js";
import { genToken } from "../../config/genToken.js";

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
      .json({ success: true, message: "Logged in successfully", data: data });
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
  // console.log("User", user);

  res.status(200).json({
    success: true,
    message: "The Profile of Logged In User",
    data: user,
  });
});
