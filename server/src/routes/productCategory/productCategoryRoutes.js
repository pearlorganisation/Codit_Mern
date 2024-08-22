import express from "express";
import {
  isAdmin,
  isAuthMiddleware,
} from "../../middleware/isAuthMiddleware.js";
import {
  createProdCategory,
  deleteProdCat,
  getAllProdCat,
  getSingleProdCat,
  updateProdCat,
} from "../../controllers/productCategory/productCategoryController.js";
const router = express.Router();

router.post("/", isAuthMiddleware, isAdmin, createProdCategory);
router.get("/", getAllProdCat);
router.get("/:id", getSingleProdCat);
router.patch("/:id", isAuthMiddleware, isAdmin, updateProdCat);
router.delete("/:id", isAuthMiddleware, isAdmin, deleteProdCat);

export default router;
