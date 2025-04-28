const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const DealRoutes = require("./routes/DealRoutes");
const SubCategoryRoutes = require("./routes/SubCategoryRoutes");
const cartRoutes= require("./routes/cartRoutes");
// server.js (entry point)
const authRoutes = require('./routes/auth');


const app = express();
app.use(cors({
  origin: [`${process.env.FRONTEND_URL}`],
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));



app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});


//Routes
app.use("/products", productRoutes);
app.use("/deals", DealRoutes);
app.use("/subcategories", SubCategoryRoutes);
app.use('/api', authRoutes);
app.use("/cart", cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




