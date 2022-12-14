import {LOGIN, LOGOUT,GETTEAMS,GETTEAMBYLOGINUSER,GETMEMBERBYTEAM,UPLOADTEAMIMAGE} from '../type'

export const user_login = (data) => async (dispatch) => {
    console.log("SignU Data", data)
    dispatch({
        type: LOGIN,
        payload: {data,isloggedin:true}
    })
    // localStorage.setItem('Users', JSON.stringify(getState()))
}
export const logout=(dispatch)=>{
    dispatch({
        type: LOGOUT,
        payload: {isloggedin:false}
    })
}
export const getTeams=(data) => async (dispatch) =>{
    // console.log('data from actios',data)
    dispatch({
        type:GETTEAMS,
        payload:data
    })
}
export const getTeamsByLoginUser=(data) => async (dispatch) =>{
    console.log('data from getTeamsByLoginUser',data)
    dispatch({
        type:GETTEAMBYLOGINUSER,
        payload:data
    })
}
export const getMemberByTeam=(data) => async (dispatch) =>{
    console.log('data from getMemberByTeam',data)
    dispatch({
        type:GETMEMBERBYTEAM,
        payload:data
    })
}

export const get_Img_url=(imgURL)=>async(dispatch)=>{
    console.log('Img URL',imgURL)
    dispatch({
        type:UPLOADTEAMIMAGE,
        payload:imgURL
    })
}