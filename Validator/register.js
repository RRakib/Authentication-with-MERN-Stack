const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateRegisterInput =(data) =>{
    let errors = {};

    data.name = !isEmpty(data.name)? data.name : "";
    data.email = !isEmpty(data.email)? data.email : "";
    data.password1 = !isEmpty(data.password1)? data.password1 : "";
    data.password2 = !isEmpty(data.password2)? data.password2 : "";

    if(validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }

    if(validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }

    if(validator.isEmpty(data.password1)){
        errors.password1 = "Password field is required";
    }

    if(validator.isEmpty(data.password2)){
        errors.password2 = "Password field is required";
    }

    if(!validator.isLength(data.password1 , { min : 6 , max : 30})){
        errors.passwordLength = "Password must be atleast 6 characters";
    }

    if(!validator.equals(data.password1 , data.password2)){
        errors.passwordMatch = "Password did not match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}
