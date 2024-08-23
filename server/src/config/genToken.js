import jwt from "jsonwebtoken";

export const genToken = (id, email) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};
