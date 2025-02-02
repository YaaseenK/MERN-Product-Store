import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import productRoutes from "./routes/product.route.js"
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __dirname = path.resolve();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production") 

app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})