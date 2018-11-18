const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json())


const adminRoutes = require('./routes/admin/addProduct')

app.use('/admin', adminRoutes)


const port = process.env.PORT || 3002

app.listen(port, console.log(`App running on http://localhost:${port}`))