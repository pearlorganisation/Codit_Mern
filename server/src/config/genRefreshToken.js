import jwt from "jsonwebtoken";

export const genRefreshToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};
