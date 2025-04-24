const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String
});

module.exports = mongoose.model("subCategory", subCategorySchema);
