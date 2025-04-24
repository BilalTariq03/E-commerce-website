const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const DealRoutes = require("./routes/DealRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


//Routes
app.use("/products", productRoutes);
app.use("/deals", DealRoutes);


app.listen(5000, () => {
  console.log("Server is running on port 5000");
})