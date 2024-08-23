import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from "dotenv";
dotenv.config();



// Configuring Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Setting up the storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

// Creating the multer upload instance
const upload = multer({ storage: storage });

// Exporting the upload and cloudinary objects
export { upload, cloudinary };
