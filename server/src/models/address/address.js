import mongoose from "mongoose";

// Address Schema
const addressSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },
    zipCode: {
      type: String,
      required: [true, "Zip is required"],
      trim: true,
    },
    roadNumber: {
      type: String,
      required: [true, "Road number is required"],
      trim: true,
    },
    street: {
      type: String,
      required: [true, "Street is required"],
      trim: true,
    },
    houseNumber: {
      type: String,
      required: [true, "House number is required"],
      trim: true,
    },
    flatNumber: {
      type: String,
      required: [true, "Flat number is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
