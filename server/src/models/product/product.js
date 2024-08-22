import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: [true, "Title is required"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: [true, "Product Category is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    sold: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      required: [true, "Color is required"],
    },
    images: [
      {
        type: Object,
        url: String,
        id: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
