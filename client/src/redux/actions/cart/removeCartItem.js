import axios from 'axios'
import { getCartItems } from './getCartItems';

export const removeCartItem = id => async dispatch => {
    try {
        console.log('asaa')
        await axios.delete(`https://ecomerceyo.herokuapp.com/api/shop/cartandproduct/${id}`)

        dispatch(getCartItems())
    } catch(e) {
        console.log(e)
    }
}