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

export const getCartAndProduct = async (req, res, next) => {
	try {
		const cart = await req.user.getCart()
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

export const getCart = async (req, res, next) => {
	try {
		const cart = await req.user.getCart()
		const products = await cart.getProducts()
		res.json(products)
	} catch (e) {
		console.log(e)
	}
}

export const postCart = async (req, res, next) => {
	try {
		const prodId = req.body.productId

		const cart = await req.user.getCart()

		const products = await cart.getProducts({ where: { id: prodId } })

		let product
		if (products.length > 0) {
			product = products[0]
		}
		let newQuantity = 1

		if (product) {
			// ACCESSING CONTAINER BETWEEN CART AND PRODUCT

			let oldQuantity = product.cartItem.quantity

			newQuantity = oldQuantity + 1

			product = await Product.findById(prodId)

			await cart.addProduct(product, { through: { quantity: newQuantity } })

			res.json(product)
		}

		product = await Product.findById(prodId)

		const cartWithProduct = await cart.addProduct(product, { through: { quantity: newQuantity } })

		res.json(cartWithProduct)
	} catch (e) {
		res.json(e.message)
	}
}

export const deleteCartItem = async (req, res, next) => {
	try {
		const cart = await req.user.getCart()
		const productId = req.params.productid

		const product = await cart.getProducts({ where: { id: productId } })

		product[0].cartItem.destroy()

		res.json({ success: true })
	} catch (e) {
		res.json(e)
	}
}

export const postOrder = async (req, res, next) => {
	try {
		const cart = await req.user.getCart()

		const products = await cart.getProducts()

		const order = await req.user.createOrder()

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
