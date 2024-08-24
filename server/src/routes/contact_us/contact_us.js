import express from "express";
import { createContact, deleteContact, getAllContact, getContact, updateContact } from "../../controllers/contact_us/contact_us.js";

const router = express.Router();


router.route('/')
.post(createContact)
.get(getAllContact);


router.route('/:id')
.get(getContact)
.patch(updateContact)
.delete(deleteContact);


export const contactUsRouter = router;
