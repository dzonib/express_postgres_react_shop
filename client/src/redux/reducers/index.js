import productReducer from './product/product'
import { combineReducers } from 'redux'
import ordersReducer from './orders/orders'
import authReducer from './auth/auth'
import errorsReducer from './errorsReducer'



const rootReducer = combineReducers({
	productReducer,
	ordersReducer,
	authReducer,
	errorsReducer
})

export { rootReducer as default }
