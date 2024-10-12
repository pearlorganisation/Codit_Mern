import { Contact } from "../../models/contact_us/contact_us.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createContact = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400).json({ success: true, message: "Body is Empty !!!!" });
  }

  const contactUs = await Contact.create(req.body);

  res.status(200).json({
    success: true,
    message: "Contact Created Successfully !! ",
    data: contactUs,
  });
});
export const updateContact = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res
      .status(200)
      .json({ success: true, message: "Provide Contact  Id !!!!" });
  }

  if (!req.body) {
    res.status(400).json({ success: true, message: "Payload is Empty !!!!" });
  }

  const Contact = await Contact.findByIdAndUpdate(req.body);

  res.status(200).json({
    success: true,
    message: "Contact Updated Successfully !! ",
    data: Contact,
  });
});
export const deleteContact = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res
      .status(400)
      .json({ success: false, message: "Provide Contact  Id !!!!" });
  }

  const contact = await Contact.findByIdAndDelete(req.param.id);

  res.status(200).json({ success: true, message: "Contact Deleted !! " });
});
export const getContact = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res
      .status(400)
      .json({ success: false, message: "Id is not provided !!!!" });
  }

  const contact = await Contact.findById(req.param.id);

  res.status(200).json({
    success: true,
    message: "Contact Found Successfully!! ",
    data: contact,
  });
});
export const getAllContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find().lean();

  res.status(200).json({
    success: true,
    message: "Contact Found Successfully !! ",
    data: contact,
  });
});
