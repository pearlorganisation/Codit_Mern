import express from "express";
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from "../../controllers/category/category.js";


const router = express.Router();


router.route('/')
    .get(getAllCategory)
    .post(createCategory)
        
;



router.route('/:id')
    .delete(deleteCategory)
    .patch(updateCategory)
    .get(getCategory);




export const categoryRouter = router;