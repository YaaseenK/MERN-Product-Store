import Product from "../models/product.model.js";
import { isValidObjectId } from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products})
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
}

export const createProducts =  async (req, res) => {
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
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const productUpdate = req.body
    if(!isValidObjectId(id)){
        return res.status(404).json({success: false, message: 'Invalid Product ID'})
    }
    try {
        const updates = await Product.findByIdAndUpdate(
            { _id: id }, // The condition to match the user by ID
            productUpdate, // The data to update the user with
            {
                new: true, // Return the updated user
                runValidators: true // Ensure validators are run before update
            }
        );
        res.status(200).json({success: true, data: updates});

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const deleteProduct = async (req, res)  =>{
    const {id} = req.params;
    if(!isValidObjectId(id)){
        return res.status(404).json({success: false, message: 'Invalid Product ID'})
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(201).json({ success: true , message: 'Product Deleted'});
    } catch (error) {
        res.status(404).json({ success: false, message: 'Product ID not found'})
    }
}