const express = require("express");
const router  = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

// Input Validation
const registration = require("../Validator/register");
const login = require("../Validator/login");

// Model
const user = require("../Model/user");

// Registration
router.post("/register" , (req, res) => {

})

const {errors , isValid} = registration(req.body);

user.findOne({email : req.body.email})
    .then(user => {
        if(user){
            return res.status(400).json({ email : "Email Already Registered"})
        }
        const newUser = new user({
            name : req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        bcrypt.genSalt(10 , (err , salt) => {
            bcrypt.hash(newUser.password , salt , (err , hash) => {
                if(err) throw err
                newUser.password = hash;
                newUser.save()
                    .then(res => {
                        res.json(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        })
    })