import axios from 'axios'
import { GET_PRODUCT, LOADING } from '../../types'

export const getProduct = (id, history, update) => async (dispatch) => {
    dispatch({
        type: LOADING
    })
	try {
		const product = await axios.get(`http://localhost:5000/api/shop/get-product/${id}`)

        dispatch({
            type: "SET_LOADING"
        })
        
		dispatch({
			type: GET_PRODUCT,
			product: product.data
        })
        
        setTimeout(() => {
            dispatch({
                type: LOADING
            })
        }, 1000)

		if (update === 'update') {
			history.push('/product/update')
		} else {
			history.push(`/get-product/${product.data.id}`)
		}
	} catch (e) {
		console.log(e.message)
	}
}
