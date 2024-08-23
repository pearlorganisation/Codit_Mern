import mongoose from "mongoose";

const variantSchema = {
  size:{
    type:String,
    maxlength:{
    value :50,
    message:"Size input characters cannot be more than 50 characters",
    },
    required:[true,"Size is required !!"]
  },
  price:{
   type:Number,
   min:
    {
      value: 1,
      message:"Price Cannot be zero or less than zero !!"
    }
  },
  color:{
    type:String,
    required:[true,"Color is a Required field"],
    maxlength:{
      value :15,
      message:"color input characters cannot be more than 15 characters",
      },

  }
}



const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: [true, "Title is required"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    basePrice: {
      type: Number,
      required: [true, "Price is required"],
      min:{
        value:1,
        message:"Price cannot be less than 1"
      },
      
    },
    variant:{
      type:[variantSchema]
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
    },
    color: {
      type: String,
      required: [true, "Color is required"],
    },
    images: {
      type:[]
    },
    reviews:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"review",     
    },
    tags:{
      type:[String],
      default:[]
    },
    discount: {
      type: Number,
      validate: {
        validator: function(val) {
          return val < 100 && val > 0 ;
        },
        message: props => `Discount ${props.value} must be less than or equal to basePrice`
      }
    }
    

  },
  {
    timestamps: true,
    toJSON:{virtual:true},
    toObject:{virtual:true}
  }
  
);

// Virtual field for banner image
productSchema.virtual('banner').get(function () {
  return this.images.length > 0 ? this.images[0] : null;
});







const Product = mongoose.model("Product", productSchema);
export default Product;
