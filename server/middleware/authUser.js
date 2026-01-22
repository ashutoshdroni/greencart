import jwt from "jsonwebtoken";

export const authUser = (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach userId safely
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};


