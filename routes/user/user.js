import express from 'express'

import User from '../../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from '../../middleware/auth'

const router = express.Router()

// register
router.post('/register', async (req, res, next) => {
	const { name, email, password } = req.body
	try {
		const userCheck = await User.findOne({ where: { email } })

		console.log(JSON.stringify(userCheck, null, 4))

		if (!userCheck) {
			const hashedPassword = await bcrypt.hash(password, 10)

			const newUser = await User.create({
				name,
				email,
				password: hashedPassword
			})

            newUser.createCart({})

			res.json(newUser)
		}
		res.json({ errors: { password: 'User already registered' } })
	} catch (e) {
		console.log(e.message)
	}
})

router.post('/login', async (req, res, next) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ where: { email } })

		if (!user) {
			res.status(404).json({ user: 'Not rigistered!' })
		}

		const checkPassword = await bcrypt.compare(password, user.password)

		if (!checkPassword) {
			res.status(400).json({ password: 'Wrong' })
		}

		const token = await jwt.sign(
			{
				id: user.id,
				name: user.name,
				email: user.email
			},
			'secret',
			{ expiresIn: '12h' }
		)

		res.json(`Bearer ${token}`)
	} catch (e) {
		console.log(e.message)
	}
})

router.get('/protected', auth, (req, res, next) => {
    res.json(req.user)
})


export default router
