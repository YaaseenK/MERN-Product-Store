import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

app.use("/api/products", productRoutes);


app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})