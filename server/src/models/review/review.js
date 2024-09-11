import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product Id is a required field !!']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User Id is a required field !!']
  },
  rating: {
    type: Number,
    min: [0, 'Minimum rating can only be 0 !!'],
    max: [5, 'Maximum rating can only be 5 !!'],
    required: [true, 'Rating is a required field']
  },
  comment: {
    type: String,
    minlength: [5, 'At least 5 characters required for comment !!'],
    maxlength: [40, 'At most 40 characters allowed for comment']
  }
}, {
  timestamps: true
});

export const Review = mongoose.model('Review', reviewSchema);
