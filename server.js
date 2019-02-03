const express = require('express')
const bodyParser = require('body-parser')
const cors  = require('cors')
const path = require('path') 

const productRoutes =require('./routes/admin/product')
const shopRoutes = require('./routes/shop/product') 
const userRoutes = require('./routes/user/user') 
const sequelize = require('./db/database') 
const Product = require ('./models/product')
const User = require('./models/user') 
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item') 
const Order = require('./models/order') 
const OrderItem =  require('./models/order-item')

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

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
    // set static folder 
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

sequelize.sync().then(() => app.listen(port, () => console.log(`App running on http://localhost:${port}`)))
