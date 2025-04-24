const mongoose = require("mongoose");

const DealSchema = new mongoose.Schema({
  section: String,
  title: String,
  image: String,
  gridClass:{
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Deal", DealSchema);