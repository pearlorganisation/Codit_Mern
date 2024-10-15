import express from 'express';
import { isAuthMiddleware } from '../../middleware/isAuthMiddleware.js';
import { addAddress } from '../../controllers/address/addressController.js';

const router = express.Router();

router.route("/").post(addAddress);

export default router
