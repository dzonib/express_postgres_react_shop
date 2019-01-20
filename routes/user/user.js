import express from 'express'

import User from '../../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from '../../middleware/auth'

const router = express.Router()

import registerValidation from '../../validation/register'
import loginValidation from '../../validation/login'

// register
router.post('/register', async (req, res, next) => {
	const { errors, isValid } = registerValidation(req.body)
	try {
		if (!isValid) {
			return res.status(400).json(errors)
		}

		const { name, email, password } = req.body

		const userCheck = await User.findOne({ where: { email } })

		if (!userCheck) {
			const hashedPassword = await bcrypt.hash(password, 10)

			const newUser = await User.create({
				name,
				email,
				password: hashedPassword
			})

			newUser.createCart({})

			res.json(newUser)
		} else {
			errors.email = 'User already registered'
			res.status(400).json(errors)
		}
	} catch (e) {
		console.log(e.message)
	}
})

router.post('/login', async (req, res, next) => {
	const { email, password } = req.body
	try {
		const { isValid, errors } = loginValidation(req.body)

		if (!isValid) {
			return res.status(400).json(errors)
		}

		const user = await User.findOne({ where: { email } })

		if (!user) {
			res.status(404).json({ user: 'Not rigistered!' })
		}

		const checkPassword = await bcrypt.compare(password, user.password)

		if (!checkPassword) {
			res.status(400).json(errors.password = "Wrong password or email")
		}

		const token = await jwt.sign(
			{
				id: user.id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin
			},
			'secret',
			{ expiresIn: '12h' }
		)

		res.json({token: `Bearer ${token}`})
	} catch (e) {
		console.log(e.message)
	}
})

router.get('/protected', auth, (req, res, next) => {
	res.json(req.user)
})

export default router
