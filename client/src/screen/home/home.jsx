import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AddTeamModal from "../../component/addteam";
import MenuAppBar from '../../component/header/navbar'
import MyTeam from '../../component/tables/myteamtable'

export default function Home() {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const dataRedux = useSelector((state) => state)
    console.log('dataRedux', dataRedux)
    if (!dataRedux.AllUsers.LoginUser?.isloggedin) {
        Navigate('/')
    }
    return (
        <div>
            <MenuAppBar />
            <h2>Home</h2>
            {/* <button onClick={()=>{dispatch(logout)}}>Logout</button> */}
            <AddTeamModal />
            <div style={{marginLeft:'50px' ,width:'500px'}}>
                <MyTeam />
            </div>

        </div>
    )
}



