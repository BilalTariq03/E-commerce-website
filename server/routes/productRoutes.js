const express = require("express");
const router = express.Router()
const Product = require("../models/Product")

//get all products
router.get("/:category", async(req, res)=> {
  try{
    const menProducts = await Product.find({category: req.params.category});
    res.json(menProducts);
  }catch(err){
    res.status(500).json({error: "server error"});
  }
})

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