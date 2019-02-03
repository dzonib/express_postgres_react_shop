import axios from 'axios'

export const updateProduct = (product, history) => async dispatch => {
    try {
        await axios.put(`https://ecomerceyo.herokuapp.com/api/admin/update-product/${product.id}`, product)
        history.push('/admin/products/1')
    } catch(e) {
        console.log(e.response.data)
    }
}