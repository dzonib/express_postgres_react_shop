const express = require('express')
const auth = require('../../middleware/auth')

const { addProduct, updateProduct, deleteProduct } = require('../../controllers/admin')

const router = express.Router()


router.post('/add-product', auth, addProduct)

router.put('/update-product/:id', auth, updateProduct)

router.delete('/delete-product/:id', auth, deleteProduct)

router.get('/getuser',auth, (req, res) => {
    res.json(req.user)
})



module.exports = router
