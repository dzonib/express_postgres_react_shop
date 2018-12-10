import express from 'express'

import { getProducts, getProduct, getCart, postCart, getCartAndProduct, deleteCartItem, postOrder } from '../../controllers/shop'

const router = express.Router()

router.get('/get-products', getProducts)

router.get('/get-product/:id', getProduct)

router.get('/cart', getCart)

router.post('/cart', postCart)

router.get('/cartandproducts', getCartAndProduct)

router.delete('/cartandproduct/:productid', deleteCartItem)

router.get('/test', postOrder)

export default router
