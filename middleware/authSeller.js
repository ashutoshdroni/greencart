import jwt from 'jsonwebtoken';

export const authSeller = async (req, res, next) => {
  try {
    const token = req.cookies.sellerToken;

    if (!token) {
      return res.json({
        success: false,
        message: 'Not authorized. Please login.',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.email !== process.env.SELLER_EMAIL) {
      return res.json({
        success: false,
        message: 'Not authorized',
      });
    }

    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: 'Invalid token' });
  }
};
