import { logout } from "../../store/actions"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export default function Home(){
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const dataRedux=useSelector((state)=>state)
    console.log('dataRedux',dataRedux)
    if(!dataRedux.AllUsers.LoginUser?.isloggedin){
        Navigate('/')
    }
    return(
        <div>
            <h2>Home</h2>
            <button onClick={()=>{dispatch(logout)}}>Logout</button>
        </div>
    )
}