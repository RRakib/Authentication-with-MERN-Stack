const express = require("express");
const key = require("./Config/key");
const mongoose = require("mongoose");
const users = require("./Controller/users")


// Connecting to mongodb
mongoose.connect(key.mongodbURI , { useNewUrlParser : true})
    .then(res => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch(err => {
        console.log("OPPS!! Error Occured! " + err)
    })

// Middleware
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// Route
app.use("/api/user" , users)

// Defining Port
port = process.env.PORT || 4000;

// Listening to port
app.listen(port , () => {
    console.log("Listening To Port 4000");
})