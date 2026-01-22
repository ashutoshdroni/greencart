import express from 'express';
import { addAddress, getAddress } from '../controllers/addressController.js';
import { authUser } from '../middleware/authUser.js';

const addressRouter = express.Router();

addressRouter.post('/add', authUser, addAddress); // Protected
addressRouter.post('/get', authUser, getAddress); // Protected

export default addressRouter;