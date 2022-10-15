import { REGISTER, REGISTERCOMPANY, LOGININ, LOGOUT, DELETE, EDIT, ADDDATE } from '../type'

const initialState = {

    Users: [],
}

const AllUsers = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER:
            return {
                ...state,
                Users: [...state.Users, action.payload],
            }

        default: return state

    }
}

export default AllUsers
