// const express = require("express");
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // middleware allows us to accept json data in req.body

app.use("/api/products", productRoutes); // /api/products will be added as prefix to all the routes in productRoutes

app.listen(PORT, ()=>{
    connectDB();
    console.log("Server started at http://localhost:" + PORT); 
});  

 