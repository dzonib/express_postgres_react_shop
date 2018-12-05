import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import productRoutes from './routes/admin/product'
import shopRoutes from './routes/shop/product'
import sequelize from './db/database'
import Product from './models/product'
import User from './models/user'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use( async (req, res, next) => {
	try {
		const user = await User.findByPk(1)
		req.user = user
		next()
	} catch(e) {
		console.log(e)
	}
})

app.use('/api/admin', productRoutes)
app.use('/api/shop', shopRoutes)



const port = process.env.PORT || 5000

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)

sequelize
	// .sync({force: true})
	.sync()
	.then(() => {
		return User.findByPk(1)
	})
	.then( user => {
		if (!user) {
			return User.create({name: 'God', email: 'whatup@lol.com'})
		}
		return user
	})
	.then(user => {
		// console.log(user)
		app.listen(port, console.log(`App running on http://localhost:${port}`))
	})
	.catch((e) => console.log(e))
