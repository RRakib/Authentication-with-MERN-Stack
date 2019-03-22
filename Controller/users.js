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
    let reg = registration({name , email , password1 , password2})

    if(!reg.isValid){
        res.status(400).json(reg.errors)
    }
    else{
        user.findOne({email})
            .then(user => {
                if(user){

                }
            })
            .catch(err => {
                console.log(err)
            })
    }
})    


module.exports = router