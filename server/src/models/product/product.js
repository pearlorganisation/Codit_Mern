import mongoose from 'mongoose';

// Define variant schema
const variantSchema = new mongoose.Schema({
  size: {
    type: String,
    maxlength: [50, 'Size input characters cannot be more than 50 characters'],
    required: [true, 'Size is required !!']
  },
  price: {
    type: Number,
    min: [1, 'Price cannot be zero or less than one !!'] // Corrected message
  },
  color: {
    type: String,
    required: [true, 'Color is a required field'],
    maxlength: [15, 'Color input characters cannot be more than 15 characters']
  }
});

// Define product schema
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    basePrice: {
      type: Number,
      min: [1, 'Base price cannot be less than 1'] // Ensure minimum value
    },
    variant: [variantSchema],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',


    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory'
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required']
    },
    color: {
      type: String,
      required: [true, 'Color is required']
    },
    size: {
      type: String,
      required: [true, 'Size is required']
    },
    images: {
      type: [{}],
      default: []
    },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    },
    tags: {
      type: [String],
      default: []
    },
    discount: {
      type: Number,
      min: [0, 'Min value for discount can be 0'],
      max: [100, 'Max value for discount can be 100']
    }
  },
  {
    timestamps: true,
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true }
  }
);

// Virtual field for banner image
productSchema.virtual('banner').get(function () {
  return this.images.length > 0 ? this.images[0] : null;
});

const Product = mongoose.model('Product', productSchema);
export default Product;
