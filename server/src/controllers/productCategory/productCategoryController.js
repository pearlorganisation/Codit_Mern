import ProductCategory from "../../models/productCategory.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createProdCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) return res.json({ message: "Title is required" });

  const findProdCat = await ProductCategory.findOne({ title });

  if (!findProdCat) {
    const newCategory = await ProductCategory.create(req.body);
    res.status(201).json({
      message: "Product Category created successfully",
      data: newCategory,
      success: true,
    });
  } else {
    throw new Error("Product Category already exists");
  }
});

export const getAllProdCat = asyncHandler(async (req, res) => {
  const findProdCategories = await ProductCategory.find();

  if (findProdCategories.length == 0)
    return res
      .status(401)
      .json({ message: "No Product Categories found", success: false });

  res.status(200).json({
    success: true,
    data: findProdCategories,
    message: "Product Categories fetched successfully",
  });
});
