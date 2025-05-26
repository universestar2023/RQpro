import jwt from "jsonwebtoken";
import { User1 } from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Safely access authorization header
    if (!token) {
      return res.status(401).json({ message: "Authorization header is missing" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRETKEY);

    // Use async/await to find the user by ID
    const user = await User1.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // Attach user information to the request object
    // console.log("Authenticated user:", user);
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default authMiddleware;
