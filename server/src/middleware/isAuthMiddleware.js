import User from "../models/user/user.js";
import jwt from "jsonwebtoken";

import { asyncHandler } from "../utils/asyncHandler.js";

export const isAuthMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorizad token expired, please login again");
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

export const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await User.findOne({ email });

  if (adminUser.role !== "admin") {
    throw new Error("You are not an admin");
  } else {
    next();
  }
});
