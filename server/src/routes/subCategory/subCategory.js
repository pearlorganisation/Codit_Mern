import express from "express";
import { createSubCategory, deleteSubCategory, getAllSubCategory, getSubCategory, updateSubCategory } from "../../controllers/subCategory/subCategory.js";


const router = express.Router();


router.route('/')
    .get(getAllSubCategory)
    .post(createSubCategory)
        
;



router.route('/:id')
    .delete(deleteSubCategory)
    .patch(updateSubCategory)
    .get(getSubCategory);




export const subCategoryRouter = router;