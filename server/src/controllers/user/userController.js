import Address from "../../models/address/address";
import User from "../../models/user/user";
import ApiErrorResponse from "../../utils/ApiErrorResponse";
import { asyncHandler } from "../../utils/asyncHandler";

export const updateProfile=asyncHandler(async(req,res,next)=>{
const userId = req.user._id;
const { firstName, lastName, phoneNumber}= req.body

const user = await User.findById(userId);

 

})