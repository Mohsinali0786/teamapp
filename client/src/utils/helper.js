import { AUTH, GET, POST } from './api'
import axios from 'axios';
import { getTeams,getMemberByTeam } from "../store/actions";
// import { useDispatch, useSelector } from "react-redux"

const getTeam = (dispatch) => {
    // const dispatch = useDispatch()
    axios.get(`http://localhost:4000${GET?.GETTEAM}`).then((res) => {
        console.log(res.data,'res.data')
        dispatch(getTeams(res.data.Teams))
        // return res.data
        // console.log(res.data.Teams, "=res=")

    }).catch((err) => {
        // console.log('Error====>', err)
    })
}

const getMember = (dispatch,LoginUser) => {
    console.log('LoginUser',LoginUser)
    // const dispatch = useDispatch()
    axios.post(`http://localhost:4000${GET?.GETMEMBERS}`,LoginUser).then((res) => {
        console.log(res.data,'res.data/Members')
        dispatch(getMemberByTeam(res.data.Members))
        // return res.data
        // console.log(res.data.Teams, "=res=")

    }).catch((err) => {
        console.log('Error====>', err)
    })
}


export {
    getTeam,
    getMember
}