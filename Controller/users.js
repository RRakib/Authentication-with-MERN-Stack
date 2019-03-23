const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router  = express.Router();

// Input Validation
const registration = require("../Validator/register");
const login = require("../Validator/login");

// Model
const User = require("../Model/user");

// Login 
router.post("/login" , (req, res) => {
    const {email , password} = req.body
    let log = login({ email , password });
    if(!log.isValid){
        res.status(400).json(log.errors)
    }
    else{
        User.findOne({email})
            .then(user => {
                if(!user){
                    return res.status(404).json({message: "Not Registered"})
                }
                else{
                    bcrypt.compare(password , user.password ,  (err , isMatch) => {
                        if(err){
                            console.log(err)
                        }
                        if(!isMatch){
                            return res.status(404).json({message : "Password Did not Match"})
                            
                        }
                        else{
                            let token = jwt.sign({
                                _id: user._id,
                                email: user.email,
                                name: user.name,
                            }, "SECRET" , {expiresIn : "2h"})
                            return res.status(200).json({message : "Login Successful", token : token})
                        }
                    })
                }
            })
    }
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