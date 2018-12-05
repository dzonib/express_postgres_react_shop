import { GET_PRODUCTS, GET_PRODUCT } from "../../types";

const initialState = {
	products: [],
	product: {}
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
		default:
			return state
	}
}

export { addProductReducer as default }
