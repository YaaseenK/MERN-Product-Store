import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import Product  from "./models/product.model.js"

dotenv.config();

const app = express();
const PORT = 3001;

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

app.post('/api/products' , async (req, res) => {
    const product = req.body;
    
        if(!product.name ||!product.price || !product.image){
            res.status(400).json({ success:false, message: "Please Provide all fields"});
        }
        const newProduct = new Product(product)
        try {
            await newProduct.save()
            res.status(201).json({ success: true , data: newProduct});
        } catch (error) {
            console.log(`Error in Create Product:`, error.message);
            res.status(500).json({success: false, message: "Server Error"})
        }
});


app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})