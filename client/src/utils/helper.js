import { AUTH, GET, POST } from './api'
import axios from 'axios';
import { getTeams } from "../store/actions";
// import { useDispatch, useSelector } from "react-redux"

const getTeam = () => {
    // const dispatch = useDispatch()
    axios.get(`http://localhost:4000${GET?.GETTEAM}`).then((res) => {
        console.log(res.data,'res.data')
        return res.data
        // console.log(res.data.Teams, "=res=")
        // dispatch(getTeams(res.data.Teams))

    }).catch((err) => {
        console.log('Error====>', err)
    })
}

export {
    getTeam,
}