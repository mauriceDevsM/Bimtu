import express from "express";
import Product from "../model/Product.js";


const productRoutes = express.Router()

const getProducts = async (req, res) =>{
    const products = await Product.find({})

    res.json({
        products, 
        pagination: {},
    });
};


productRoutes.route('/').get(getProducts);

export default productRoutes;