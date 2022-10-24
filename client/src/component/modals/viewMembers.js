import { Modal } from 'antd';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { POST } from '../../utils/api'
// import Swal from "sweetalert2";
import { useSelector, useDispatch } from 'react-redux';
import { getMember } from '../../utils/helper';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ViewMembers = (props) => {
    const {color}=props
    const dispatch = useDispatch()
    const data = useSelector((state) => state.AllUsers)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewClicked,setViewCliked]=useState(false)
    const { teamname, teamowner,teamemail } = props
    console.log('teamName', data?.LoginUser)
    // let allmembers = data?.GerMemberByTeam?.filter((v, i) => v?.teamemail === teamemail)
    let allmembers = data?.GerMemberByTeam?.teammembers

    // allmembers=allmembers?.teammembers
    console.log('allmembers', allmembers)


    useEffect(() => {
        // console.log('useEffect----====?')
        setViewCliked(true)
    }, [viewClicked===true])
    
    const showModal = () => {
        setIsModalOpen(true);
        console.log('')
        getMember(dispatch,data?.LoginUser)
    };
    const handleOk = () => {
        setIsModalOpen(false);
        setViewCliked(false)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setViewCliked(false)

    };
    return (
        <>
        {/* <div style={{display:'flex'}}> */}
            <a onClick={showModal}>
                {/* View */}
                <VisibilityIcon className='myteamtable-icons' sx={{color:color}}/>
            </a>
        {/* </div> */}
            <Modal title="View member" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h4 className='viewdata-heading'>All {teamname} Members</h4>
                <p className='viewdata-MembersLength'>Total({allmembers?.length})</p>
                <table className='viewdata-datatable' border='1px solid black'>
                    <thead>
                        <tr>
                        <th>S.No</th>
                            <th>Members Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allmembers?.map((v, i) => {
                            return (
                                <>
                                {
                                    (i+1)%2===0?
                                <tr style={{backgroundColor:'grey',color:'white'}}>
                                    <td>{i+1}</td>
                                    <td>{v.email}</td>
                                </tr>
                                :
                                <tr>
                                <td>{i+1}</td>
                                <td>{v.email}</td>
                            </tr>

                                }
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </Modal>
        </>
    )
}
export default ViewMembers;