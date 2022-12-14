import { LOGIN, LOGOUT, GETTEAMS, GETTEAMBYLOGINUSER, GETMEMBERBYTEAM, UPLOADTEAMIMAGE } from '../type'

const initialState = {

    LoginUser: {},
    MyTeams: [],
    MemberOfATeams: [],
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
            // console.log('reduce getteam',action.payload)
            return {
                ...state,
                MyTeams: action.payload
            }
        case GETTEAMBYLOGINUSER:
            console.log('GETTEAMBYLOGINUSER', action.payload)
            return {
                ...state,
                MemberOfATeams: action.payload
            }
        case GETMEMBERBYTEAM:
            console.log('GETMEMBERBYTEAM', action.payload)
            return {
                ...state,
                GerMemberByTeam: action.payload
            }
        case UPLOADTEAMIMAGE:
            console.log('UPLOADTEAMIMAGE',action.payload)
            return{
                ...state,
                uploaded_img_url:action.payload
            }


        default: return state

    }
}

export default AllUsers
