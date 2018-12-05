import axios from 'axios'

export const addProduct = (payload, history) => async (dispatch) => {
    try {
        await axios.post('http://localhost:5000/api/admin/add-product', payload)
        history.push('/')
    } catch (e) {
        console.log(e.response)
    }
}
