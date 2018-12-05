import axios from 'axios'
import { GET_PRODUCT } from '../../types';


export const getProduct = (id, history, update) => async dispatch => {
    const product = await axios.get(`http://localhost:5000/api/shop/get-product/${id}`)


    dispatch({
        type: GET_PRODUCT,
        product: product.data
    })

    if (update === 'update') {
        history.push('/product/update')
    } else {
        history.push(`/get-product/${product.data.id}`)
    }
    
}