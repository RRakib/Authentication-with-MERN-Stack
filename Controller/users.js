const express = require("express");
const router  = express.Router();

// Input Validation
const registration = require("../Validator/register");
const login = require("../Validator/login");

// Model
const user = require("../Model/user");

// Login 
router.post("/login" , (req, res) => {
    const {email , password} = req.body
    res.json({message : email + password})
})

// Registration
router.post("/register" , (req, res) => {
    const{email , name , password1 , password2} = req.body
    let reg = registration({email , name , password1 , password2})

    if(!reg.isValid){
        res.status(400).json(reg.errors)
    }
    else{
        res.status(200).json({message : "Successfully Registered"})
    }
})    


module.exports = router