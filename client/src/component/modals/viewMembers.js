import { Modal } from 'antd';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { POST } from '../../utils/api'
// import Swal from "sweetalert2";
import { useSelector, useDispatch } from 'react-redux';
import { getMember } from '../../utils/helper';

const ViewMembers = (props) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.AllUsers)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewClicked,setViewCliked]=useState(false)
    const { teamname, teamowner,teamemail } = props
    console.log('teamName', teamemail)
    let allmembers = data?.GerMemberByTeam?.filter((v, i) => v?.teamemail === teamemail)
    console.log('allmembers', allmembers)


    useEffect(() => {
        // console.log('useEffect----====?')
        setViewCliked(true)
    }, [viewClicked===true])
    
    const showModal = () => {
        setIsModalOpen(true);
        getMember(dispatch)
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
            <a onClick={showModal}>
                View
            </a>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                                    <td>{v.memberEmail}</td>
                                </tr>
                                :
                                <tr>
                                <td>{i+1}</td>
                                <td>{v.memberEmail}</td>
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