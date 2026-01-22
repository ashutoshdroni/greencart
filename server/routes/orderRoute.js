import express from 'express';
import { placeOrderCOD, getUserOrders, getAllOrders } from '../controllers/orderController.js';
import { authUser } from '../middleware/authUser.js';
import { authSeller } from '../middleware/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD); // Protected
orderRouter.post('/user', authUser, getUserOrders); // Protected
orderRouter.get('/seller', authSeller, getAllOrders); // Protected (seller only)

export default orderRouter;