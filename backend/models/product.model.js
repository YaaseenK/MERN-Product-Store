import {Schema, Types, model} from "mongoose";

const ProductSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },

}, {
    timestamps: true 
});

const Product = model ('Product', ProductSchema);

export default Product;