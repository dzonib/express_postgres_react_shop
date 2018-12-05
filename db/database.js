import Sequelize from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:123456@localhost:5433/node-react-shop')

export default sequelize