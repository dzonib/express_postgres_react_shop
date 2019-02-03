import axios from 'axios'
import { GET_PRODUCTS } from '../../types'

export const getProducts = (passedPage) => async (dispatch) => {
	const products = await axios.get(`https://ecomerceyo.herokuapp.com/api/shop/get-products/${passedPage}`)

	dispatch({
		type: GET_PRODUCTS,
		products: products.data
	})
}
