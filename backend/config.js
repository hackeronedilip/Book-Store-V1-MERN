import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const PORT = process.env.PORT; // Default to 5555 if not set
export const mongoDBURL = process.env.MONGO_URL; // Default local DB
