import productReducer from './product/product'
import { combineReducers } from 'redux'



const rootReducer = combineReducers({
	productReducer
})

export { rootReducer as default }
