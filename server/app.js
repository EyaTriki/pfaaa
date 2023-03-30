require("dotenv").config();
const express =require("express");
const app =express();
const mongoose =require("mongoose");
const CryptoJS=require("crypto-js");

require("./db/conn")

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")
const cors =require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);

//app.use(cors({origin: 'http://localhost:3000'}));

const port=8005;
app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
})