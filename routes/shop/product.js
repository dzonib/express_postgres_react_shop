import express from 'express'

import { getProducts, getProduct } from '../../controllers/shop'

const router = express.Router()


router.get('/get-products', getProducts)

router.get('/get-product/:id', getProduct)


export default router