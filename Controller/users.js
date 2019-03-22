const express = require("express");
const bcrypt = require("bcryptjs");
const router  = express.Router();

// Input Validation
const registration = require("../Validator/register");
const login = require("../Validator/login");

// Model
const User = require("../Model/user");

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
        User.findOne({email})
            .then(user => {
                if(user){
                    return res.status(400).json({
                        message : "Email Already Registered"
                    })
                }
                else{
                    let newUser = User({
                        name,
                        email,
                        password : password1
                    })
                    bcrypt.genSalt(10, (err , salt) => {
                        bcrypt.hash(newUser.password , salt ,  (err , hash)=>{
                            if(err) throw err;
                            newUser.password = hash
                            newUser.save()
                                .then(user => {
                                    console.log("Data saved")
                                    res.json({ message : "User Saved To DB"})
                                })
                                .catch(err => {
                                    res.json({err : "Error Occured"})
                                })
                        })
                    })
                    
                }
            })
            .catch(err => {
                res.json(err)
            })
    }
})    


module.exports = router