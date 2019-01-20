import Validator from 'validator'

import isEmpty from './isEmpty'


export default (userInput) => {
    const errors = {}

    userInput.name = !isEmpty(userInput.name) ?  userInput.name : userInput.name
    userInput.email = !isEmpty(userInput.email) ?  userInput.email : userInput.email
    userInput.password = !isEmpty(userInput.password) ?  userInput.password : userInput.password

    if (Validator.isEmpty(userInput.name)) {
        errors.name = 'Name field is requiered :p'
    }

    if (!Validator.isLength(userInput.name, {min: 2, max: 80})) {
        errors.name = 'Name must be at least 2 charachters long'
    }

    if (Validator.isEmpty(userInput.email)) {
        errors.email = 'Email field is requiered'
    }

    if (!Validator.isEmail(userInput.email)) {
        errors.email = 'Please enter valid email address'
    }

    if (Validator.isEmpty(userInput.password)) {
        errors.password = 'Password field is requiered'
    }

    if (!Validator.isLength(userInput.password, {min: 6, max: 80})) {
        errors.password = 'Password must be at least 6 charachters long'
    }

    if (Validator.isEmpty(userInput.password2)) {
        errors.password2 = 'Password2 field is requiered'
    }

    if (!Validator.equals(userInput.password, userInput.password2)) {
        errors.password = 'Paswords do not match'
        errors.password2 = 'Paswords do not match'
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}