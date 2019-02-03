const Sequelize = require('sequelize')

const sequelize = new Sequelize("d7fdperub8chb1", "nbmebryhqtjjll", "f856238e7ef4be99c5216e0ce54a63d36e1cee5511febbe34c9efe9de3e14e1e", {
    host: "ec2-46-137-170-51.eu-west-1.compute.amazonaws.com",
    dialect: "postgres",
    protocol: 'postgres',
    
    dialectOptions: {
        ssl: true
    }
})

module.exports = sequelize
