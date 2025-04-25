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
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


//Routes
app.use("/products", productRoutes);
app.use("/deals", DealRoutes);
app.use("/subcategories", SubCategoryRoutes);
app.use('/api', authRoutes);
app.use("/cart", cartRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})



