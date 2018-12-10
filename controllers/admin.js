import Product from '../models/product'

import addProductValidation from '../validation/addProduct'

export const addProduct = async (req, res, next) => {
	const { errors, isValid } = addProductValidation(req.body)

	if (!isValid) {
		res.status(400).json(errors)
	}

	const { title, price, imageUrl, description } = req.body

	try {
		// const product = await Product.create({
		// 	title,
		// 	imageUrl,
		// 	price,
		// 	description,
		// 	userId: req.user.id
		// })
		// Or sequealize creates createProduct on user (like in prisma)
		const product = await req.user.createProduct({
			title,
			imageUrl,
			price,
			description
		})
		// gives free userId

		res.json(product)
	} catch (e) {
		res.status(400)
	}
}

export const updateProduct = async (req, res, next) => {
	req.body.price = String(req.body.price)
	try {
		const { errors, isValid } = addProductValidation(req.body)

		if (!isValid) {
			res.status(400).json(errors)
		}

		const { title, price, imageUrl, description } = req.body

		const product = await Product.update(
			{ title, price, imageUrl, description },
			{
				returning: true,
				where: { id: req.params.id }
			}
		)

		res.json(product)
	} catch (e) {
		res.status(400)
	}
}

export const deleteProduct = async (req, res, next) => {
	try {
		const product = await Product.destroy({ where: { id: req.params.id } })

		res.json(product)
	} catch (e) {
		console.log(e)
	}
}
