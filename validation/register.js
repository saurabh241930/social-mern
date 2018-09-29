const Validator = require("validator")
const isEmpty = require("./is-empty")


module.exports = function validateRegisterInput(data) {
	let errors = {}

	data.name = !isEmpty(data.name) ? data.name : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';



	if(!Validator.isLength(data.name,{min:2,max:30})){
		errors.name = "Name must me between 2 and 30 characters";
	}

	if(Validator.isEmpty(data.name)){
      errors.name = "Name cannot be empty";
	}



    if(!Validator.isEmail(data.email,{min:2,max:30})){
		errors.email = "email is not valid";
	}

	if(Validator.isEmpty(data.email)){
      errors.email = "email cannot be empty";
	}


   if(!Validator.isLength(data.password,{min:2,max:30})){
		errors.password = "password must me between 2 and 30 characters";
	}

	if(Validator.isEmpty(data.password)){
      errors.password = "password cannot be empty";
	}


    if(!Validator.equals(data.password2,data.password)){
		errors.password2 = "password not matched";
	}

	if(Validator.isEmpty(data.password2)){
      errors.password2 = "password2 cannot be empty";
	}




	return {
		errors,
		isValid:isEmpty(errors)
    }
}