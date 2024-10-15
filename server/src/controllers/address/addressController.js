

// handle to add or update address

import Address from "../../models/address/address.js";
import User from "../../models/user/user.js";
import ApiErrorResponse from "../../utils/ApiErrorResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const addAddress = asyncHandler(async (req, res, next) => {
    // get userId 
    const userId = req.user._id;
    const user = await User.findById(userId);

    const {
        country,
        city,
        state,
        zipCode,
        roadNumber,
        street,
        houseNumber,
        flatNumber
    } = req.body;

    // Check for missing fields
    if (!country || !state || !city || !zipCode || !roadNumber || !street || !houseNumber || !flatNumber) {
        return next(new ApiErrorResponse("All fields are required", 400));
    }

    try {
        // Create and save the address
        const address = await Address.create({
            country,
            city,
            state,
            zipCode,
            roadNumber,
            street,
            houseNumber,
            flatNumber
        });
         await address.save();
         /** add later when user login is required */
         if(!user){
            return next(new ApiErrorResponse("Unable to save the address",400))
         }  user.addresses = address._id;
            return res.status(201).json({
            message: "Address added successfully",
            address,
            // user
        });
    } catch (error) {
        return next(new ApiErrorResponse("Error adding address", 500));
    }
});


/** Handle for updating the address */
export const updateAddress = asyncHandler(async (req, res, next) => {
    const userId = req.user._id;

    // Find the user and populate the address field
    const user = await User.findById(userId).populate('addresses');
    console.log(user);
    if (!user) {
        return next(new ApiErrorResponse("User not found", 404));
    }

    // Destructure the address fields from the request body
    const {
        country,
        city,
        state,
        zipCode,
        roadNumber,
        street,
        houseNumber,
        flatNumber
    } = req.body;

    // Check for missing fields
    if (!country || !state || !city || !zipCode || !roadNumber || !street || !houseNumber || !flatNumber) {
        return next(new ApiErrorResponse("All fields are required", 400));
    }

    try {
        // Check if the user has an existing address
        const address = await Address.findById(user.addresses);
        if (!address) {
            return next(new ApiErrorResponse("Address not found", 404));
        }

        // Update the address fields
        address.country = country;
        address.city = city;
        address.state = state;
        address.zipCode = zipCode;
        address.roadNumber = roadNumber;
        address.street = street;
        address.houseNumber = houseNumber;
        address.flatNumber = flatNumber;

        // Save the updated address
        const updatedAddress = await address.save();

        res.status(200).json({
            message: "Address updated successfully",
            address: updatedAddress
        });
    } catch (error) {
        return next(new ApiErrorResponse("Error updating address", 500));
    }
});
