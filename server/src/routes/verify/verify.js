import express from "express";
import { verifyMail } from "../../controllers/auth/authController.js";


const router = express.Router();


router.route


('/:token').get(verifyMail);

export default router;