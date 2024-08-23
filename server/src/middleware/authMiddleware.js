import { asyncHandler } from "../utils/asyncHandler";
import ApiErrorResponse from "../utils/ApiErrorResponse";

export const verifyToken = asyncHandler(async (req, res, next) => {
  const { access_token } = req.cookies;
  console.log(`Middle - access_token : ${access_token} ---`);
  if (!access_token) {
    return next(new ApiErrorResponse("Unauthorized user!", 401));
  }
  const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
  if (!decoded) {
    return next(new ApiErrorResponse("Invalid access token!", 401));
  }
  const user = await User.findById(decoded._id).select(
    "-password -refreshToken"
  );
  if (!user) {
    return next(new ApiErrorResponse("Invalid access token!", 401));
  }
  req.user = user;
  next();
});

