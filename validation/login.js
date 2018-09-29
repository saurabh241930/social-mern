const Validator = require("validator")
const isEmpty = require("./is-empty")


module.exports = function validateLoginInput(data) {
	let errors = {}

	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	







    if(!Validator.isEmail(data.email,{min:2,max:30})){
		errors.email = "email is not valid";
	}



   if(!Validator.isLength(data.password,{min:2,max:30})){
		errors.password = "password must me between 2 and 30 characters";
	}

	
	if(Validator.isEmpty(data.email)){
      errors.email = "email cannot be empty";
	}

	if(Validator.isEmpty(data.password)){
      errors.password = "password cannot be empty";
	}







	return {
		errors,
		isValid:isEmpty(errors)
    }
}