import mongoose from "mongoose";
import bcrypt from "bcrypt";



// User Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    addresses: [addressSchema],
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

// Password hashing middleware
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
