import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
  subCategoryName: {
    type: String,
    minlength: [4, 'Min length for characters in subCategory name is 4'],
    maxlength: [50, 'Max length for characters in subCategory name is 50'],
    required: [true, 'SubCategory name is required']
  }
}, {
  timestamps: true
});





const categorySchema = new mongoose.Schema({
    categoryName: {
      type: String,
      minlength: [4, 'Min length for characters in category name is 4'],
      maxlength: [50, 'Max length for characters in category name is 50'],
      required: [true, 'Category name is required']
    },
    subCategories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory'
    }]
  }, {
    timestamps: true
  });
  
  const SubCategory = mongoose.model('SubCategory', subCategorySchema);
  const Category = mongoose.model('Category', categorySchema);
  export { Category };
  export { SubCategory };