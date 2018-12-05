import express from 'express'

import { addProduct, updateProduct, deleteProduct } from '../../controllers/product'

const router = express.Router()


router.post('/add-product', addProduct)

router.put('/update-product/:id', updateProduct)

router.delete('/delete-product/:id', deleteProduct)

router.get('/getuser', (req, res) => {
    res.json(req.user)
})



export default router
