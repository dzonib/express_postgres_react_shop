import express from 'express'
import auth from '../../middleware/auth'

import { addProduct, updateProduct, deleteProduct } from '../../controllers/admin'

const router = express.Router()


router.post('/add-product', auth, addProduct)

router.put('/update-product/:id', auth, updateProduct)

router.delete('/delete-product/:id', auth, deleteProduct)

router.get('/getuser',auth, (req, res) => {
    res.json(req.user)
})



export default router
