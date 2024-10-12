import express from "express";

// import { verifyToken } from "../middleware/authMidleware.js";
import {
  registerUser,
  loginUser,
  logout,
  profile,
  verifyMail,
} from "../../controllers/auth/authController.js";
import {
  isAdmin,
  isAuthMiddleware,
} from "../../middleware/isAuthMiddleware.js";
const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/verify/:token").get(verifyMail);
// router.route("/profile").get(isAuthMiddleware, profile);
router.get("/profile", isAuthMiddleware, profile);
export default router;
