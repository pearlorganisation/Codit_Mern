import ProductCategory from "../../models/productCategory.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { validateMongodbID } from "../../utils/validateMongodbID.js";

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

export const getSingleProdCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(id);

  validateMongodbID(id);

  try {
    const findProductCategory = await ProductCategory.findById(id);

    if (findProductCategory == null) {
      res
        .status(404)
        .json({ success: false, message: "No Product Category with ID found" });
    }

    res.status(200).json({
      success: true,
      message: "Product Category fetched succesfully",
      data: findProductCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteProdCat = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validateMongodbID(id);
  try {
    const deleteProdCategory = await ProductCategory.findByIdAndDelete(id);

    if (deleteProdCategory == null) {
      res
        .status(404)
        .json({ success: false, message: "No Product Category with ID found" });
    }

    res.status(200).json({
      success: true,
      message: "Product Category deleted succesfully",
      data: deleteProdCategory,
    });
  } catch (error) {
    throw new Error(error);
  }
});

export const updateProdCat = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validateMongodbID(id);

  const updateProdCategory = await ProductCategory.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
    }
  );

  if (updateProdCategory == null) {
    res
      .status(404)
      .json({ success: false, message: "No Product Category with ID found" });
  }

  res.status(200).json({
    success: true,
    message: "Product Category updated succesfully",
    data: updateProdCategory,
  });
});
