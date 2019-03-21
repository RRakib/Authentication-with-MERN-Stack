const validator = require("validator");

module.exports = validateLoginInput = (user) => {
    let errors = {};

    if(!user.email){
        errors.email = "Email Required"
    }
    else if(!validator.isEmail(user.email)){
        errors.email = "Email is invalid"
    }
    if(!user.password){
        errors.password = "Password Required"
    }

    return {
        errors,
        isValid : Object.keys(errors).length === 0
    }
}