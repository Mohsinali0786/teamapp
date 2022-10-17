import { REGISTER, REGISTERCOMPANY, LOGIN, LOGOUT, DELETE, EDIT, ADDDATE } from '../type'

const initialState = {

    LoginUser: {}
}

const AllUsers = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                LoginUser: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                LoginUser: action.payload
            }

        default: return state

    }
}

export default AllUsers
