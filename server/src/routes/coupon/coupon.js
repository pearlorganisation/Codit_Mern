import express from "express";

import { upload } from "../../config/cloudinary.js";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupons,
  getCouponById,
} from "../../controllers/coupon/couponController.js";

const router = express.Router();

router.route("/").post(upload.single("image"), createCoupon).get(getAllCoupons);
router.route("/:id").get(getCouponById).delete(deleteCoupon);

export const couponRouter = router;
