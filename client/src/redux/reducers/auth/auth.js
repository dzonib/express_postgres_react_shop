import { SET_CURRENT_USER } from '../../types'
import isEmpty from '../../../util/isEmpty'

const initialState = {
	isAuth: false,
	user: {}
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return { ...state, user: action.payload, isAuth: !isEmpty(action.payload) }
		default:
			return state
	}
}

export default authReducer
