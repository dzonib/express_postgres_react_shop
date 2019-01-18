import { GET_ORDERS } from "../../types"


const initialState = []

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDERS:
            return action.payload
        default:
            return state
    }
}

export default ordersReducer