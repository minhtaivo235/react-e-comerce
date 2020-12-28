const INITTIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITTIAL_STATE, action) => {
    if (action.type === 'SET_CURRENT_USER') {
        return {
            ...state,
            currentUser: action.payload
        }
    }
    return state;
}
export default userReducer;