import { ADD_PRODUCT_RED, DELETE_PRODUCT_RED, GET_PRODUCT_RED, UPDATE_PRODUCT_RED } from "../Constants"
export function ProductReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_PRODUCT_RED:
            newState = state.push(action.payload)
            return newState
        case GET_PRODUCT_RED:
            return action.payload
        case UPDATE_PRODUCT_RED:
            newState = state
            index = state.findIndex((x) => x.id === Number(action.payload.id))
            newState[index].name = action.payload.name
            return newState
        case DELETE_PRODUCT_RED:
            newState = state
            index = state.find((x) => x.id === action.payload.id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}