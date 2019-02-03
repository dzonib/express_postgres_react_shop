import { GET_PRODUCTS, GET_PRODUCT, GET_CART, LOADING } from "../../types"

const initialState = {
	products: [],
	product: {},
	cart: [],
	loading: true
}


const addProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: true
			}
		case LOADING:
			return {
				...state,
				loading: false
			}
		case GET_PRODUCT:
			return {
				...state,
				product: action.product
			}
		case GET_PRODUCTS:
			return {...state, products: action.products}
		case GET_CART:
			return {
				...state,
				cart: action.payload
			}
		default:
			return state
	}
}

export { addProductReducer as default }
