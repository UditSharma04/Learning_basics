import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },

}, {
    timestamps: true // this is so that every entry will have a created at and updated at with it.
});

const Product = mongoose.model('Product',productSchema); // make a collection name Product with schema productSchema.

export default Product;