import axios from 'axios'
import { GET_PRODUCTS } from '../../types'

export const getProducts = (passedPage) => async (dispatch) => {
	const products = await axios.get(`http://localhost:5000/api/shop/get-products/${passedPage}`)

	dispatch({
		type: GET_PRODUCTS,
		products: products.data
	})
}
