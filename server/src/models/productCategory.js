import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: [true, "Title is required"],
    },
  },
  {
    timestamps: true,
  }
);

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
export default ProductCategory;
