const Product = require('../models/product')
const User = require('../models/user')

const getProducts = async (req, res, next) => {
	try {
		let limit = 3
		let offset = 0
		let page = req.params.page

		const allProducts = await Product.findAndCountAll()

		let pages = Math.ceil(allProducts.count / limit)

		offset = limit * (page - 1)

		const products = await Product.findAll({
			limit,
			offset
		})

		res.json({ result: products, pages, count: allProducts.count })
	} catch (e) {
		res.status(400).json(e)
	}
}

const getProduct = async (req, res, next) => {
	try {
		const product = await Product.findByPk(req.params.id)
		res.json(product)
	} catch (e) {
		console.log(e)
	}
}

const getCartAndProduct = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.user.id)
		const cart = await user.getCart()
		const cartAndProduct = await cart.getProducts()

		const rtrn = cartAndProduct.map((item) => {
			return {
				id: item.id,
				title: item.title,
				quantity: item.cartItem.quantity
			}
		})

		res.json(rtrn)
	} catch (e) {
		console.log(e)
	}
}

const getCart = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.user.id)
		const cart = await user.getCart()
		const products = await cart.getProducts()
		res.json(products)
	} catch (e) {
		console.log(e)
	}
}

const postCart = async (req, res, next) => {
	try {
		const prodId = req.body.productId
		const user = await User.findByPk(req.user.id)
		const cart = await user.getCart()

		const products = await cart.getProducts({ where: { id: prodId } })

		let product
		if (products.length > 0) {
			[ product ] = products
		}
		let newQuantity = 1

		if (product) {
			// ACCESSING CONTAINER BETWEEN CART AND PRODUCT

			let oldQuantity = product.cartItem.quantity

			newQuantity = oldQuantity + 1

			product = await Product.findById(prodId)

			await cart.addProduct(product, { through: { quantity: newQuantity } })

			return res.json(product)
		}

		product = await Product.findById(prodId)

		const cartWithProduct = await cart.addProduct(product, { through: { quantity: newQuantity } })

		res.json(cartWithProduct)
	} catch (e) {
		res.json(e.message)
	}
}

const deleteCartItem = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.user.id)
		const cart = await user.getCart()
		const productId = req.params.productid

		const product = await cart.getProducts({ where: { id: productId } })

		product[0].cartItem.destroy()

		res.json({ success: true })
	} catch (e) {
		res.json(e)
	}
}

const postOrder = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.user.id)
		const cart = await user.getCart()

		const products = await cart.getProducts()

		const order = await user.createOrder()

		const orderProducts = await order.addProducts(
			products.map((product) => {
				product.orderItem = { quantity: product.cartItem.quantity }
				return product
			})
		)

		await cart.setProducts(null)

		res.json(orderProducts)
	} catch (e) {
		console.log(e)
	}
}

const getOrders = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.user.id)
		const orders = await user.getOrders({ include: [ 'products' ] })

		res.json(orders)
	} catch (e) {
		res.status(400).json(e)
	}
}


module.exports = {
	getOrders,
	postOrder,
	deleteCartItem,
	postCart,
	getCart,
	getCartAndProduct,
	getProduct,
	getProducts
}