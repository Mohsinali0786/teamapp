import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { POST } from '../../utils/api'
import axios from 'axios';
import Swal from 'sweetalert2';
function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logininfo,setLogininfo]=useState({})
    const [editbtnclicked,setEditBtnClicked]=useState(false)
    const dispatch = useDispatch()
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        editBtn()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const loginuser = useSelector((state) => state.AllUsers.LoginUser.data)
    console.log('Profile Section', loginuser)
    useEffect(()=>{
        axios.post(`http://localhost:4000${POST?.GETLOGINUSER}`, loginuser).then((res) => {
            console.log(res.data.user, 'res.data in Edit_Email')
            setLogininfo(res.data.user)
    
        }).catch((err) => {
            console.log('Error in email====>', err)
        })
    },[])
    useEffect(()=>{
        setEditBtnClicked(false)
        axios.post(`http://localhost:4000${POST?.EDITLOGINUSER}/${logininfo._id}`, logininfo).then((res) => {
            console.log(res.data, 'res.data in Edit_Email')  
            
                Swal.fire({
                    icon: res.data.status,
                    text: res.data.message,
                  });
    
        }).catch((err) => {
            console.log('Error in email====>', err)
        })
    },[editbtnclicked===true])
    const edituserdetails=(e)=>{
        setLogininfo({
            ...logininfo,
            [e.target.name]:e.target.value
        })
    }
    const editBtn=()=>{
        setEditBtnClicked(true)   
    }
    console.log('logininfo',logininfo)
    return (
        <>
            <p type="primary" onClick={showModal}>
                Profile
            </p>
            <Modal title="Basic Modal" open={isModalOpen} okText='Edit' onOk={handleOk} onCancel={handleCancel}>
                <form>
                    <table>
                        <tr>
                            <td><label>Name</label></td>
                            <td><input name='name' value={logininfo.name} onChange={(e)=>{edituserdetails(e)}}/></td>
                        </tr>
                        <tr>
                            <td><label>Email</label></td>
                            <td><input name='email' value={logininfo.email} onChange={(e)=>{edituserdetails(e)}}/></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input name='password' value={logininfo.password} onChange={(e)=>{edituserdetails(e)}}/></td>
                        </tr>
       
                </table>
                </form>
            </Modal>
        </>
    );
}
export default Profile