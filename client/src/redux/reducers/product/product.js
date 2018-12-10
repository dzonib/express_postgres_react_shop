import { GET_PRODUCTS, GET_PRODUCT, GET_CART } from "../../types"

const initialState = {
	products: [],
	product: {},
	cart: []
}

const addProductReducer = (state = initialState, action) => {
	switch (action.type) {
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
