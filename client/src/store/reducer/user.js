import { REGISTER, REGISTERCOMPANY, LOGIN, LOGOUT, DELETE, EDIT, ADDDATE, GETTEAMS } from '../type'

const initialState = {

    LoginUser: {},
    MyTeams: []
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

        case GETTEAMS:
            return {
                ...state,
                MyTeams: action.payload
            }

        default: return state

    }
}

export default AllUsers
