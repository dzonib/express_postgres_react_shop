import Product from '../models/product'

export const getProducts = async (req, res, next) => {
	try {
		const products = await Product.findAll()
		res.json(products)
	} catch (e) {
		res.status(400).json(e)
	}
}

export const getProduct = async (req, res, next) => {
	try {
		const product = await Product.findByPk(req.params.id)
        res.json(product)
	} catch (e) {
		console.log(e)
	}
}
