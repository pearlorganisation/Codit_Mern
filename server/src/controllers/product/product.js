import Product from "../../models/product/product.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createProduct = async (req, res) => {
    try {
      const {
        title,
        slug,
        description,
        basePrice,
        variant,
        category,
        quantity,
        sold,
        color,
        images,
        reviews,
        tags,
        discount
      } = req.body;
      

      const imagesUrl = JSON.stringify(images);

      console.log(imagesUrl);
       
  
      const newProduct = new Product({
        title,
        slug,
        description,
        basePrice,
        variant,
        category,
        quantity,
        sold,
        color,
        images,
        reviews,
        tags,
        discount
      });
  
      const savedProduct = await newProduct.save();
      res.status(201).json({
        message: 'Product created successfully',
        product: savedProduct
      });
    } catch (err) {
      res.status(500).json({
        message: 'Failed to create product',
        error: err.message
      });
    }
  };
  



export const getAllProducts = asyncHandler(async (req, res) => {
    
      const products = await Product.find().lean();
      res.status(200).json({status:true,message:"Products Found Successfully",data:products});
   
  });
  
  
  
  export const getProduct = asyncHandler(async (req, res) => {
   
      const product = await Product.findById(req.params.id).lean();
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({status:true,message:"Product Found Successfully",data:product});
   
  });


  export const updateProduct = asyncHandler(async (req, res) => {
   
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({status:true,message:"Product updated Successfully temprorrary"});
   
  });


  export const deleteProduct = asyncHandler(async (req, res) => {
     
    

      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({status:true,message:"Product Deleted Successfully temprorrary"});
   
  });