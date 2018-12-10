import axios from 'axios'

export const addToCart = (productInCart, history) => async (dispatch) => {
	await axios.post(`http://localhost:5000/api/shop/cart`, { productId: productInCart })
}
