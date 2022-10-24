import { Modal } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AUTH, GET, POST } from '../../utils/api'
import EditIcon from '@mui/icons-material/Edit';


import { useSelector, useDispatch } from 'react-redux';
import { getMember, getTeam } from '../../utils/helper';

const EditTeamName = (props) => {
    const { teamid, color,setEditTeamName,editTeamName } = props
    const [inputteamname, setInputteamname] = useState('')
    const dispatch = useDispatch()
    const data = useSelector((state) => state.AllUsers)
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [viewClicked,setViewCliked]=useState(false)
    const { teamname, teamowner, teamemail } = props
    // console.log('teamName', teamname)
    let allmembers = data?.GerMemberByTeam?.filter((v, i) => v?.teamemail === teamemail)
    // console.log('allmembers', allmembers)
    
    
    const showModal = () => {
        setIsModalOpen(true);
        getMember(dispatch)
        console.log('editTeamName',editTeamName)
    };
    // useEffect(()=>{

    // },[getTeam])
    const handleOk = () => {
        setIsModalOpen(false);
        // setViewCliked(false)
        if (editTeamName) {
            console.log('Input Team Name', inputteamname)
            axios.post(`http://localhost:4000${POST?.EDITTEAMNAME}/${teamid}`, { inputteamname }).then((res) => {
                console.log(res.data, 'res.data')
                getTeam(dispatch)
                // dispatch(getTeams(res.data.Teams))

                // return res.data
                // console.log(res.data.Teams, "=res=")

            }).catch((err) => {
                console.log('Error====>', err)
            })
        }
        else{
            console.log('Input Team Email', inputteamname)
            axios.post(`http://localhost:4000${POST?.EDITTEAMEMAIL}/${teamid}`, { inputteamname }).then((res) => {
                console.log(res.data, 'res.data in Edit_Email')
                getTeam(dispatch)
                // dispatch(getTeams(res.data.Teams))

                // return res.data
                // console.log(res.data.Teams, "=res=")

            }).catch((err) => {
                console.log('Error in email====>', err)
            })
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        // setViewCliked(false)

    };
    return (
        <>
            <a onClick={showModal}>
                <EditIcon className='myteamtable-icons' sx={{ color: color }} />
            </a>
            {
                editTeamName?
                <Modal title="Edit Team Name" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <table>
                    <tr>
                        <th>TeamName</th>
                        <td><input onChange={(e) => setInputteamname(e.target.value)} /></td>
                    </tr>
                </table>
            </Modal>
            :
            <Modal title="Edit Team Email" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <table>
                    <tr>
                        <th>TeamEmail</th>
                        <td><input onChange={(e) => setInputteamname(e.target.value)} /></td>
                    </tr>
                </table>
            </Modal>
            }
        </>
    )
}
export default EditTeamName;