import axios from 'axios'
import { GET_CART } from '../../types'

export const getCartItems = () => async dispatch => {
    try {
        const res = await axios.get('https://ecomerceyo.herokuapp.com/api/shop/cartandproducts')
        dispatch({
            type: GET_CART,
            payload: res.data
        })
    } catch(e) {
        console.log(e.response.data)
    }
}