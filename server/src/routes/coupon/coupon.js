import express from "express";

import { upload } from "../../config/cloudinary.js";
import {
  createCoupon,
  deleteCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
} from "../../controllers/coupon/couponController.js";

const router = express.Router();

router.route("/").post(upload.single("image"), createCoupon).get(getAllCoupons);
router.route("/:id").put(upload.single("image"),updateCoupon).get(getCouponById).delete(deleteCoupon);

export const couponRouter = router;
