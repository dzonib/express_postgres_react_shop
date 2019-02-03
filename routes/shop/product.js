const express = require('express')
const auth = require('../../middleware/auth')

const {
	getProducts,
	getProduct,
	getCart,
	postCart,
	getCartAndProduct,
	deleteCartItem,
	postOrder,
	getOrders
}  = require('../../controllers/shop')

const router = express.Router()

router.get('/get-products/:page', getProducts)

router.get('/get-product/:id', getProduct)

router.get('/cart', auth, getCart)

router.post('/cart', auth, postCart)

router.get('/cartandproducts', auth, getCartAndProduct)

router.delete('/cartandproduct/:productid', auth, deleteCartItem)

router.post('/postorders', auth, postOrder)

router.get('/getorders', auth, getOrders)

module.exports = router