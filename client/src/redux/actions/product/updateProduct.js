import axios from 'axios'

export const updateProduct = (product, history) => async dispatch => {
    try {
        await axios.put(`http://localhost:5000/api/admin//update-product/${product.id}`, product)
        history.push('/admin/products')
    } catch(e) {
        console.log(e.response.data)
    }
}