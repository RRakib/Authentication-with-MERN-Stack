const express = require("express");
const mongoose = require("mongoose");
const key = require("./Config/key");
const users = require("./Controller/users")
const app = express();

// Connecting to mongodb
mongoose.connect(key.mongodbURI , { useNewUrlParser : true})
    .then(res => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch(err => {
        console.log("OPPS!! Error Occured! " + err)
    })

// Middleware
app.use(express.urlencoded({extended : false}))
app.use(express.json())

// Route
app.use("/api/user" , users)

// Defining Port
port = process.env.PORT || 5000;

// Listening to port
app.listen(port , () => {
    console.log("Listening To Port 5000");
})