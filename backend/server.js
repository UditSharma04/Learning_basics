// const express = require("express");
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"


dotenv.config();

const app = express();

app.use(express.json()); // middleware allows us to accept json data in req.body

app.use("/api/proudcts", productRoutes); // /api/products will be added as prefix to all the routes in productRoutes

app.listen(5000, ()=>{
    connectDB();
    console.log("Server started at http://localhost:5000"); 
});

