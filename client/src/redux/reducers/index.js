import productReducer from './product/product'
import { combineReducers } from 'redux'
import ordersReducer from './orders/orders'



const rootReducer = combineReducers({
	productReducer,
	ordersReducer
})

export { rootReducer as default }
