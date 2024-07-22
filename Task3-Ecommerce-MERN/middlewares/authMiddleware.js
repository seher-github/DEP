import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Protected route middleware
export const requireSignIn = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Authorization token is required" });
        }
        const token = authHeader.split(" ")[1]; // Extract token
        if (!token) {
            return res.status(401).json({ message: "Token is missing" });
        }
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to request
        next(); // Proceed to the next middleware or route
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return res.status(401).json({ message: "Unauthorized", error: error.message });
    }
};

// Admin access middleware
export const isAdmin = async (req, res, next) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await userModel.findById(req.user._id);
        if (!user || user.role !== 1) {
            return res.status(403).json({ success: false, message: "Forbidden Access" });
        }
        next(); // Proceed to the next middleware or route
    } catch (error) {
        console.error("Admin check failed:", error.message);
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};
