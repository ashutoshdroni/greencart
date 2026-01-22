import express from 'express';
import { register, login, logout, isAuth } from '../controllers/userController.js';
import { authUser } from '../middleware/authUser.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.get('/is-auth', authUser, isAuth); // Protected route

export default userRouter;