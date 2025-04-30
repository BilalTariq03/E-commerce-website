const express = require("express");
const router = express.Router()
const Product = require("../models/product")


//get by id
router.get("/detail/:id", async (req,res) => {
  try{
    const product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({error: "Product not found"});
    }
    res.json(product);
  }catch(err){
    console.error("Error fetching product:", err);
    res.status(500).json({error: "server error"})
  }
});

//get all products
router.get("/:category", async(req, res)=> {
  try{
    const Products = await Product.find({category: req.params.category});
    res.json(Products);
  }catch(err){
    res.status(500).json({error: "server error"});
  }
})


//get all subcategory products
router.get("/:category/:subcategory", async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    console.log(`Received category: ${category}, subcategory: ${subcategory}`); // Log the parameters
    const products = await Product.find({ category, subCategory: subcategory });
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found in this subcategory" });
    }
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Error fetching subcategory products" });
  }
});




router.post("/", async(req, res)=> {
  try{
    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save();
    res.status(201).json(saveProduct);
  }catch(err){
    res.status(400).json({error: err,message})
  }
})

module.exports =router;