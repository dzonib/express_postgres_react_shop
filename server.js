import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import productRoutes from './routes/admin/product'
import shopRoutes from './routes/shop/product'
import userRoutes from './routes/user/user'
import sequelize from './db/database'
import Product from './models/product'
import User from './models/user'
import Cart from './models/cart'
import CartItem from './models/cart-item'
import Order from './models/order'
import OrderItem from './models/order-item'

const app = express()

app.use(cors())
app.use(bodyParser.json())

// app.use(async (req, res, next) => {
// 	try {
// 		const user = await User.findByPk(1)
// 		req.user = user
// 		next()
// 	} catch (e) {
// 		console.log(e)
// 	}
// })

app.use('/api/admin', productRoutes)
app.use('/api/shop', shopRoutes)
app.use('/api/user', userRoutes)

const port = process.env.PORT || 5000

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product)
User.hasOne(Cart)
// Cart.belongsTo(User)
// optional one direction is enough
Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })
Order.belongsTo(User)
User.hasMany(Order)
Order.belongsToMany(Product, { through: OrderItem })

sequelize.sync().then(() => app.listen(port, () => console.log(`App running on http://localhost:${port}`)))
