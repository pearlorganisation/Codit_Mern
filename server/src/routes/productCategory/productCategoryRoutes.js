import express from "express";
import {
  isAdmin,
  isAuthMiddleware,
} from "../../middleware/isAuthMiddleware.js";
import {
  createProdCategory,
  getAllProdCat,
} from "../../controllers/productCategory/productCategoryController.js";
const router = express.Router();

router.post("/", isAuthMiddleware, isAdmin, createProdCategory);
router.get("/", getAllProdCat);

export default router;
