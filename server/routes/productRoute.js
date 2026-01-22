import express from 'express';
import { addProduct, productList, productId, changeStock } from '../controllers/productController.js';
import { upload } from '../middleware/multer.js';
import { authSeller } from '../middleware/authSeller.js';

const productRouter = express.Router();

productRouter.post('/add', authSeller, upload.array('images', 4), addProduct); // Protected
productRouter.get('/list', productList);
productRouter.post('/id', productId);
productRouter.post('/stock', authSeller, changeStock); // Protected

export default productRouter;