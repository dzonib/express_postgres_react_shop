import axios from 'axios'

export const addToCart = (productInCart, history) => async (dispatch) => {
	await axios.post(`https://ecomerceyo.herokuapp.com/api/shop/cart`, { productId: productInCart })
}
