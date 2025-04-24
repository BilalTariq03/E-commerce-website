const express = require("express");
const router = express.Router();
const SubCategory = require("../models/subCategory");

router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const subcategories = await SubCategory.find({ category });
    res.json(subcategories);
  } catch (err) {
    console.error("Error fetching subcategories:", err);
    res.status(500).json({ error: "Server error" });
  }
});




router.post("/", async (req, res) => {
  try {
    const { name, category, image } = req.body;
    const newSubCategory = new SubCategory({ name, category, image });
    const savedSubCategory = await newSubCategory.save();
    res.status(201).json(savedSubCategory);
  } catch (err) {
    console.error("Error adding subcategory:", err);
    res.status(400).json({ error: "Failed to add subcategory" });
  }
});


module.exports = router;
