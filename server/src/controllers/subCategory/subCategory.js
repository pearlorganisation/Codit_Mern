import { SubCategory } from "../../models/category/category.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createSubCategory = asyncHandler(async (req, res) => {
      
    if(!req.body)
    {
        res
      .status(300)
      .json({ success: true, message: "Body is Empty !!!!" });
    }

    const subCategory = await SubCategory.create(req.body);
   
  
  
    res
      .status(200)
      .json({ success: true, message: "Subcategory Created Successfully !! ",data:subCategory });
  });
export const updateSubCategory = asyncHandler(async (req, res) => {
      
    if(!req.params.id)
    {
        res
        .status(200)
        .json({ success: true, message: "Provide Category  Id !!!!" }); 
    }

    if(!req.body)
    {
        res
      .status(200)
      .json({ success: true, message: "Payload is Empty !!!!" });
    }

    const subCategory = await SubCategory.create(req.body);
   
  
  
    res
      .status(200)
      .json({ success: true, message: "Category Updated Successfully !! ",data:subCategory });
  });
export const deleteSubCategory = asyncHandler(async (req, res) => {
      
    if(!req.params.id)
        {
            res
            .status(400)
            .json({ success: true, message: "Provide Category  Id !!!!" }); 
        }

    const subCategory = await SubCategory.findByIdAndDelete(req.payload);

    
   
  
  
    res
      .status(200)
      .json({ success: true, message: "Category Deleted !! " });
  });
export const getSubCategory = asyncHandler(async (req, res) => {
      
    if(!req.params.id)
    {
        res
      .status(300)
      .json({ success: false, message: "Id is not provided !!!!" });
    }

    const subCategory = await SubCategory.findById(req.param.id);
     

  
  
    res
      .status(200)
      .json({ success: true, message: "Category Found Successfully!! ",data:subCategory });
  });
export const getAllSubCategory = asyncHandler(async (req, res) => {
      


    const category = await SubCategory.find().lean();
     

  
  
    res
      .status(200)
      .json({ success: true, message: "Category Found Successfully !! ",data:category });
  });