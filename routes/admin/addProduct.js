const express = require('express')

const router = express.Router()

const products = []

router.post('/add-product', async (req, res) => {
    await products.push(req.body.item)
    res.json(products)
})

module.exports = router