import axios from 'axios'
import { getProducts } from './getProducts';

export const deleteProduct = (id) => async dispatch => {
    console.log('asd')
    try {
        if (window.confirm("Are you sure you want to delete 'title' ?")) {
            await axios.delete(`http://localhost:5000/api/admin/delete-product/${id}`)

            dispatch(getProducts())
        }
    } catch(e) {
        console.log(e)
    }
}