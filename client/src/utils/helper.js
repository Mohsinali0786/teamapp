import { AUTH, GET, POST } from './api'
import axios from 'axios';
import { getTeams, getMemberByTeam,getTeamsByLoginUser } from "../store/actions";
// import { useDispatch, useSelector } from "react-redux"

const getTeam = (dispatch) => {
    // const dispatch = useDispatch()
    axios.get(`http://localhost:4000${GET?.GETTEAM}`).then((res) => {
        console.log(res.data, 'res.data')
        dispatch(getTeams(res.data.Teams))
        // return res.data
        // console.log(res.data.Teams, "=res=")

    }).catch((err) => {
        // console.log('Error====>', err)
    })
}

const getMember = (dispatch, LoginUser, teamname) => {
    console.log('LoginUser', LoginUser)
    console.log('teamname', teamname)
    let logininfo = {
        LoginUser,
        teamname
    }
    // const dispatch = useDispatch()
    axios.post(`http://localhost:4000${GET?.GETMEMBERS}`, logininfo).then((res) => {
        console.log(res.data, 'res.data/Members')
        dispatch(getMemberByTeam(res.data.Members))
        // return res.data
        // console.log(res.data.Teams, "=res=")

    }).catch((err) => {
        console.log('Error====>', err)
    })
}

const get_team_by_loginuser = (dispatch, current_login) => {
    axios.post(`http://localhost:4000${POST?.GETTEAMBYLOGINUSER}`, current_login).then((res) => {
        console.log(res.data.TeamNames, 'res.data in Home')
        dispatch(getTeamsByLoginUser(res.data.TeamNames))
    }).catch((err) => {
        console.log('Error====>', err)
    })

}


export {
    getTeam,
    getMember,
    get_team_by_loginuser
}