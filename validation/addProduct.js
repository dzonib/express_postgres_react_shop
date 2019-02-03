const Validator = require('validator') 

const isEmpty = require('./isEmpty') 


module.exports = (userInput) => {
    
    const errors = {}

    userInput.title = !isEmpty(userInput.title) ? userInput.title : ''
    userInput.price = !isEmpty(userInput.price) ? userInput.price : ''
    userInput.imageUrl = !isEmpty(userInput.imageUrl) ? userInput.imageUrl : ''
    userInput.description = !isEmpty(userInput.description) ? userInput.description : ''

    if (Validator.isEmpty(userInput.title)) {
        errors.title = 'Product title field is requiered'
    }

    if (!Validator.isLength(userInput.title, {min: 2, max: 100})) {
        errors.title = 'Product title must be between 2 and 100 charachters long'
    }

    if (Validator.isEmpty(userInput.price)) {
        errors.price = "Product price is requiered"
    }

    if (Validator.isEmpty(userInput.description)) {
        errors.description = "Product description field is requiered"
    }
    if (Validator.isEmpty(userInput.imageUrl)) {
        errors.imageUrl = "Image url is requiered"
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}