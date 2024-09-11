import mongoose from "mongoose";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: [3, "Min Length for first name is 3 !!"],
    maxlength: [25, "Max Length for first name is 25 !!"],
    required: [true, "FirstName is required field !!"],
    trim:true,
  },
  lastName: {
    type: String,
    minlength: [3, "Min Length for last name is 3 !!"],
    maxlength: [25, "Max Length for last name is 25 !!"],
    required: [true, "LastName is required field !!"],
    trim:true,
  },
  email: {
    type: String,
    required: [true, "Email is required field !!"],
    match: [emailRegex, "Please enter a valid email address !!"],
    trim:true,
    unique:true
  },
  phoneNumber: {
    type: String,  
    maxlength: [30, "PhoneNumber cannot be more than 30 digits !!"],
    trim:true,
  }
});

export const Contact = mongoose.model('ContactUs', ContactSchema);
