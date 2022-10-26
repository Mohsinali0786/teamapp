import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AddTeamModal from "../../component/modals/addteam";
import MenuAppBar from '../../component/header/navbar'
import MyTeam from '../../component/tables/myteamtable'
import TeamMember from '../../component/tables/teammembertable'
import { getTeam } from "../../utils/helper";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { getTeams } from "../../store/actions";
import { AUTH, GET, POST } from '../../utils/api'
import axios from 'axios';
import { textAlign } from "@mui/system";
import { getTeamsByLoginUser } from '../../store/actions';
import {get_team_by_loginuser} from '../../utils/helper'



export default function Home() {
    const [memberadded, setmemberadded] = useState(false)
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const dataRedux = useSelector((state) => state)
    const current_login = dataRedux?.AllUsers?.LoginUser?.data
    console.log('current_login Home', current_login)
    console.log('++++', getTeam())

    useEffect(() => {
        console.log('use effect in home')
        get_team_by_loginuser(dispatch,current_login)
    //     axios.post(`http://localhost:4000${POST?.GETTEAMBYLOGINUSER}`, current_login).then((res) => {
    //   console.log(res.data.TeamNames, 'res.data in Home')
    //   dispatch(getTeamsByLoginUser(res.data.TeamNames))

    // }).catch((err) => {
    //   console.log('Error====>', err)
    // })
    }, [memberadded === true])

    useEffect(() => {
        // axios.get(`http://localhost:4000${GET?.GETTEAM}`).then((res) => {
        //     console.log(res.data,'res.data')
        //     // console.log(res.data.Teams, "=res=")
        //     dispatch(getTeams(res.data.Teams))

        // }).catch((err) => {
        //     console.log('Error====>', err)
        // })
        getTeam(dispatch)
    }, [])
    if (!dataRedux.AllUsers.LoginUser?.isloggedin) {
        Navigate('/')
    }
    return (
        <div>
            <MenuAppBar LoginUser={dataRedux.AllUsers.LoginUser} />
            <div className="home-tables-Main-div">
                <div className="home-tables-div">
                    <div className="home-myteam-div">
                        <MyTeam memberadded={memberadded} setmemberadded={setmemberadded} />
                    </div>
                    <div className="home-team-member-div">
                        <TeamMember memberadded={memberadded} setmemberadded={setmemberadded}/>
                    </div>
                </div>
                <div className='home-addteam-component-div'>
                    <AddTeamModal />
                </div>

            </div>


        </div>
    )
}



