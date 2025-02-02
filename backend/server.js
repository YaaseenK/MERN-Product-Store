import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js"
import Product  from "./models/product.model.js"

dotenv.config();

const app = express();
const PORT = 3000;

app.post('/products' , (req, res) => {
    try {
        const createProduct = async (req, res) =>{
            const product = await Product.create(req.body)
            res.status(200).json(product);
        }
    } catch (err) {
        return res.status(400).json({ message: `Error:  ${err.message}` });
    }
});


app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:3000")
})