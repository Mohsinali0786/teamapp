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


export default function Home() {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const dataRedux = useSelector((state) => state)
    console.log('dataRedux', dataRedux)
    console.log('++++',getTeam())
    useEffect(()=>{
        
            // axios.get(`http://localhost:4000${GET?.GETTEAM}`).then((res) => {
            //     console.log(res.data,'res.data')
            //     // console.log(res.data.Teams, "=res=")
            //     dispatch(getTeams(res.data.Teams))
        
            // }).catch((err) => {
            //     console.log('Error====>', err)
            // })
        getTeam(dispatch)
    },[])
    if (!dataRedux.AllUsers.LoginUser?.isloggedin) {
        Navigate('/')
    }
    return (
        <div>
            <MenuAppBar LoginUser={dataRedux.AllUsers.LoginUser} />
            {/* <h2>Home</h2> */}
            {/* <button onClick={()=>{dispatch(logout)}}>Logout</button> */}
            <AddTeamModal />
            <div style={{marginLeft:'50px' ,width:'650px',textAlign:'center'}}>
                <MyTeam />
            </div>
            <div  style={{marginLeft:'50px' ,width:'650px',textAlign:'center'}}>
                <TeamMember/>
            </div>

        </div>
    )
}



