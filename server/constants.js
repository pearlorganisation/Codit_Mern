export const DB_NAME = "Codit_DB";

export const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "strict",
  secure: process.env.NODE_ENVIRONMENT !== "development",
};