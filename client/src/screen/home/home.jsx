import { useSelector } from "react-redux"
import AddIcon from '@mui/icons-material/Add';
export default function Home(){
    const dataRedux=useSelector((state)=>state)
    console.log('dataRedux',dataRedux)
    return(
        <div>
            <h2>Home</h2>
            <AddIcon className='add-team-icon'/>
        </div>
    )
}