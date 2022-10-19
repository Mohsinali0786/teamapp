import { Modal } from 'antd';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { POST } from '../../utils/api'
// import Swal from "sweetalert2";
import { useSelector,useDispatch} from 'react-redux';
import { getMember } from '../../utils/helper';

const ViewMembers = (props) => {
    const dispatch=useDispatch()
    const data = useSelector((state) => state.AllUsers)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { teamname, teamowner } = props
    console.log('teamName',teamname)
    let allmembers=data?.GerMemberByTeam?.filter((v,i)=>v?.teamname===teamname)
    console.log('allmembers',allmembers)

    
    useEffect(()=>{
        getMember(dispatch)
    },[])

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <a onClick={showModal}>
                View
            </a>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h4>All {teamname} Members</h4>
                <p>({allmembers?.length})</p>
               {/* { allmembers.map((v,i)=>{
                    return(
                        <tr>
                            <td>{v.memberEmail}</td>
                        </tr>
                    )
                })} */}
            </Modal>
        </>
    )
}
export default ViewMembers;