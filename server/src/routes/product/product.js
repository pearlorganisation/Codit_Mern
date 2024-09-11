import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../../controllers/product/product.js";
import { upload } from "../../config/cloudinary.js";


const router = express.Router();


router.route('/')
    .get(getAllProducts)
    .post(upload.fields([
        {
            name: "images", maxCount: 10
        }
    ]), createProduct)
        
;



router.route('/:id')
    .delete(deleteProduct)
    .patch(updateProduct)
    .get(getProduct);




export const productRouter = router;