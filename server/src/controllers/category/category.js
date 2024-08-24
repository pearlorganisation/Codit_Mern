import { Category } from "../../models/category/category.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createCategory = asyncHandler(async (req, res) => {
      
    console.log("bodyyy",req.body);

    if(!req.body)
    {
        res
      .status(300)
      .json({ success: true, message: "Body is Empty !!!!" });
    }

    const category = await Category.create(req.body);
   
  
  
    res
      .status(200)
      .json({ success: true, message: "Category Created Successfully !! ",data:category });
  });
export const updateCategory = asyncHandler(async (req, res) => {
      
    if(!req.params.id)
    {
        res
        .status(200)
        .json({ success: true, message: "Provide Category  Id !!!!" }); 
    }

    if(!req.body)
    {
        res
      .status(300)
      .json({ success: true, message: "Payload is Empty !!!!" });
    }

    const category = await Category.findByIdAndUpdate(req.body);
   
  
  
    res
      .status(200)
      .json({ success: true, message: "Category Updated Successfully !! ",data:category });
  });
export const deleteCategory = asyncHandler(async (req, res) => {
      
    if(!req.params.id)
        {
            res
            .status(400)
            .json({ success: false, message: "Provide Category  Id !!!!" }); 
        }

    const category = await Category.findByIdAndDelete(req.param.id);
   
  
  
    res
      .status(200)
      .json({ success: true, message: "Category Deleted !! " });
  });
export const getCategory = asyncHandler(async (req, res) => {
      
    if(!req.params.id)
    {
        res
      .status(300)
      .json({ success: false, message: "Id is not provided !!!!" });
    }

    const category = await Category.findById(req.param.id);
     

  
  
    res
      .status(200)
      .json({ success: true, message: "Category Found Successfully!! ",data:category });
  });
export const getAllCategory = asyncHandler(async (req, res) => {
      


    const category = await Category.find().lean();
     

  
  
    res
      .status(200)
      .json({ success: true, message: "Category Found Successfully !! ",data:category });
  });