import Coupon from "../../models/coupons/coupon.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { cloudinary } from "../../config/cloudinary.js";
import { validateMongodbID } from "../../utils/validateMongodbID.js";

export const createCoupon = asyncHandler(async (req, res) => {
  const { name, couponcode, discount } = req.body;

  const imageUrl = await cloudinary.uploader.upload(req.file.path);

  const newCoupon = new Coupon({
    name,
    couponcode,
    discount,
    couponImage: imageUrl.secure_url,
  });

  const savedCoupon = await newCoupon.save();
  res.status(201).json({
    message: "Coupon created successfully",
    product: savedCoupon,
  });
});

export const getAllCoupons = asyncHandler(async (req, res, next) => {
  const findCoupons = await Coupon.find();

  if (findCoupons.length === 0)
    return res.status(404).json({
      success: false,
      message: "No Coupons Found",
    });

  res.status(200).json({
    success: true,
    message: "Coupons Found Successfully",
    data: findCoupons,
  });
});

export const getCouponById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  validateMongodbID(id);

  const findCoupon = await Coupon.findById(id);

  if (findCoupon == null)
    return res
      .status(404)
      .json({ success: false, message: "No Coupon with ID Found" });

  res.status(200).json({ success: true, message: "Coupon Found Successfully" });
});

export const deleteCoupon = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  validateMongodbID(id);

  const deleteCoupon = await Coupon.findByIdAndDelete(id);

  if (deleteCoupon == null)
    return res
      .status(404)
      .json({ success: false, message: "No Coupon with ID Found" });

  res
    .status(200)
    .json({ success: true, message: "Coupon Deleted Successfully" });
});

/**---------------------Controller for edit by Id-------------------------------------------- */

export const updateCoupon = asyncHandler(async(req,res)=>{
  // get the id of coupon
  const { id } = req.params;
  validateMongodbID(id);
 
  const { name, couponcode, discount } = req.body
  const imageUrl = await cloudinary.uploader.upload(req.file.path);
  const updatedCoupon = await Coupon.findByIdAndUpdate(id,{
    name,
    couponcode,
    discount,
    couponImage: imageUrl.secure_url
  },
{new:true})
  if(!updatedCoupon){
    return res.status(400).json({message:"Failed to create the coupon"})
  }res.status(200).json({message:"updated the coupon",data: updatedCoupon})
})