const express = require("express");
const router = express.Router();
const Deal = require("../models/Deal");

//get all deals or by section
router.get("/", async (req, res) => {
  try{
    const section = req.query.section;
    const deals= section? await Deal.find({section}): await Deal.find();
    res.json(deals)
  }catch(err){
    res.status(500).json({error: "server error"});
  }
});


router.post("/", async (req,res) => {
  try{
    const newDeal = new Deal(req.body);
    const saved = await newDeal.save();
    res.status(201).json(saved);
  }catch(err){
    res.status(400).json({error: err, message})
  }
})

module.exports=router