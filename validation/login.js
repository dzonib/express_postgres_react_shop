import Validator from 'validator'

import isEmpty from "./isEmpty";

export default (userInput) => {

    const errors = {}

	userInput.email = !isEmpty(userInput.email) ? userInput.email : userInput.email
    userInput.password = !isEmpty(userInput.password) ? userInput.password : userInput.password

    if (Validator.isEmpty(userInput.email)) {
        errors.email = 'Email field is requiered'
    }

    if (Validator.isEmpty(userInput.password)) {
        errors.password = 'Please enter your password'
    }


    return {
        isValid: isEmpty(errors),
        errors
    }
}
