import axios from 'axios'
import { GET_ORDERS } from '../../types';

export const getOrders = () => async dispatch => {
    const orders =  await axios.get('https://ecomerceyo.herokuapp.com/api/shop/getorders')
    dispatch({
        type: GET_ORDERS,
        payload: orders.data
    })
}

export const postOrders = (history) => async dispatch  => {
    try {
        await axios.post('https://ecomerceyo.herokuapp.com/api/shop/postorders')
        history.push('/orders')
    } catch(e) {
        console.log(e.response.data)
    }
}