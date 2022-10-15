import { REGISTER, REGISTERCOMPANY, LOGININ, LOGOUT, DELETE, EDIT, ADDDATE } from '../type'

export const Sign_Up = (data) => async (dispatch) => {
    console.log("SignU Data", data)
    dispatch({
        type: REGISTER,
        payload: data
    })
    // localStorage.setItem('Users', JSON.stringify(getState()))
}