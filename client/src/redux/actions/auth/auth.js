import axios from 'axios'
import jwtDecode from 'jwt-decode'

import setTokenToHeader from '../../../util/setTokenToHeader'
import { GET_ERRORS, SET_CURRENT_USER } from '../../types'

export const registerUser = (userData, history) => async (dispatch) => {
	try {
		await axios.post('https://ecomerceyo.herokuapp.com/api/user/register', userData)

		history.push('/login')
	} catch (e) {
		dispatch({
			type: GET_ERRORS,
			payload: e.response.data
		})
	}
}

export const loginUser = (userData, history) => async (dispatch) => {
	try {
        const res = await axios.post('http://localhost:5000/api/user/login', userData)

        localStorage.setItem('jwt', res.data.token)

        setTokenToHeader(res.data.token)

        const token = await jwtDecode(res.data.token)

		dispatch({
			type: SET_CURRENT_USER,
			payload: token
		})

		history.push('/products/1')
	} catch (e) {
		dispatch({
			type: GET_ERRORS,
			payload: e.response.data
		})
	}
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwt')
    setTokenToHeader(false)
    dispatch({type: SET_CURRENT_USER, payload: {}})
}
