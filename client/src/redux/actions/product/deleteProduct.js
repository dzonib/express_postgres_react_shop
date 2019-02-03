import axios from 'axios'
import { getProducts } from './getProducts';

export const deleteProduct = (id) => async dispatch => {
    try {
        if (window.confirm("Are you sure you want to delete 'title' ?")) {
            await axios.delete(`https://ecomerceyo.herokuapp.com/api/admin/delete-product/${id}`)
            dispatch(getProducts())
        }
    } catch(e) {
        console.log(e)
    }
}