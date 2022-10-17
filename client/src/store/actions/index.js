import { REGISTER, REGISTERCOMPANY, LOGIN, LOGOUT, DELETE, EDIT, ADDDATE } from '../type'

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