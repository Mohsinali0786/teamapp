import { Modal } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AUTH, GET, POST } from '../../utils/api'
import EditIcon from '@mui/icons-material/Edit';


import { useSelector, useDispatch } from 'react-redux';
import { getMember, getTeam } from '../../utils/helper';

const EditTeamName = (props) => {
    const {teamid,color}=props
    // console.log('team id',teamid)
    const [inputteamname,setInputteamname]=useState('')
    const dispatch = useDispatch()
    const data = useSelector((state) => state.AllUsers)
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [viewClicked,setViewCliked]=useState(false)
    const { teamname, teamowner,teamemail } = props
    console.log('teamName', teamname)
    let allmembers = data?.GerMemberByTeam?.filter((v, i) => v?.teamemail === teamemail)
    // console.log('allmembers', allmembers)


    const showModal = () => {
        setIsModalOpen(true);
        getMember(dispatch)
    };
    // useEffect(()=>{

    // },[getTeam])
    const handleOk = () => {
        setIsModalOpen(false);
        // setViewCliked(false)
        console.log('Input Team Name', inputteamname)
        
        axios.post(`http://localhost:4000${POST?.EDITTEAMNAME}/${teamid}`,{inputteamname}).then((res) => {
            console.log(res.data,'res.data')
            getTeam(dispatch)
            // dispatch(getTeams(res.data.Teams))
           
            // return res.data
            // console.log(res.data.Teams, "=res=")
    
        }).catch((err) => {
            console.log('Error====>', err)
        })
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        // setViewCliked(false)

    };
    return (
        <>
            <a onClick={showModal}>
                <EditIcon className='myteamtable-icons' sx={{color:color}}/>
            </a>
            <Modal title="Edit Team Name" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <table>
                    <tr>
                        <th>TeamName</th>
                        <td><input onChange={(e)=>setInputteamname(e.target.value)}/></td>
                    </tr>
                </table>
            </Modal>
        </>
    )
}
export default EditTeamName;