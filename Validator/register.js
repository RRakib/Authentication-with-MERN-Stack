const validator = require("validator");

module.exports = validateRegisterInput = user =>{
    let errors = {};

    if(!user.name){
        errors.name = "Name field is required";
    }

    if(!user.email){
        errors.email = "Email field is required";
    }
        else if(!validator.isEmail(user.email)){
            errors.email = "Please provide a valid email"
        }

    if(!user.password1){
        errors.password1 = "Password field is required"
    }
        else if(user.password1.length <= 8){
            errors.password1 = "Password must be greater then 8"
        }
        
    if(!user.password2){
        errors.password2 = "Password field is required"
    }
        else if(user.password1 !== user.password2){
            errors.password2 = "Password did not match"
        }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}