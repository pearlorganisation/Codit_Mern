import mongoose from "mongoose";
import { DB_NAME } from "../../../constants.js";
import dotenv from "dotenv";
dotenv.config();

export const connectToMongoDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected. DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`MongoDB connection failed: ${error}`);
    process.exit(1);
  }
};
