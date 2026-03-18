import { User1 } from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";
export const getUserdata=async(req,res)=>{
    try {
        // Use the user ID from the decoded token
        const user = await User1.findById(req.user._id).select("-password"); // Exclude the password field
        console.log(user)
        if (!user) {
          return res.status(404).send({ message: "User not found!" });
        }
    
        res.status(200).send(user); // Send the user data as the response
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
}
