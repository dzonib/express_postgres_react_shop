import axios from 'axios'

export const addProduct = (payload, history) => async (dispatch) => {
    try {
        await axios.post('https://ecomerceyo.herokuapp.com/api/admin/add-product', payload)
        history.push('/')
    } catch (e) {
        console.log(e.response)
    }
}
