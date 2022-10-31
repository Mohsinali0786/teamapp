import {  Modal } from 'antd';
// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {POST} from '../../utils/api'
import Swal from "sweetalert2";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { get } from '../../utils/helper';
import { useSelector,useDispatch } from 'react-redux';
import { getTeamsByLoginUser } from '../../store/actions';
import { Button } from '@mui/material';

const AddMember = (props) => {
  const dispatch=useDispatch()
    const {teamname,teamowner,teamemail}=props
    const {memberadded,setmemberadded}=props
    console.log('memberadded',memberadded)
    const dataRedux = useSelector((state) => state.AllUsers)
    const current_login=dataRedux?.LoginUser?.data
    let myTeam = dataRedux?.MemberOfATeams
    // const teamemail=teamEmail
    console.log('teamowner',teamemail)
    const [email,setEmail]=useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setmemberadded(true)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  useEffect(()=>{
    axios.post(`http://localhost:4000${POST?.GETTEAMBYLOGINUSER}`,current_login).then((res) => {
      console.log(res.data,'res.data in teammembertable')
      dispatch(getTeamsByLoginUser(res.data.TeamNames))
      setmemberadded(false)
      // return res.data
      // console.log(res.data.Teams, "=res=")

  }).catch((err) => {
      console.log('Error====>', err)
  })
    
  },[memberadded===true])

  const onsubmitbtn=(memberEmail,teamname,teamowner,teamemail)=>{
    console.log('submitted')
    handleOk()
    let memberdata={
        memberEmail,
        teamname,
        teamemail,
        teamowner
    }
    axios.post(`http://localhost:4000${POST?.ADDMEMBER}`,memberdata)
    .then((res) => {
      console.log('====>',res.data)
      if (res.data?.status === "success") {
        Swal.fire({
          icon: res.data.status,
          text: res.data.message,
        });
        // setdeletedbtn(true)
        // dispatch(getTeams(res.data.AllTeams))
        //after delete get team
      }
      else {
        Swal.fire({
          icon: res.data.status,
          text: res.data.message,
        });
      }
    })
    .catch((error) => {
      alert("Ohh Error Occured");
      console.log(error, "=error=");
    });

  }

  return (
    <>
      <a onClick={showModal}>
        {/* Add Member */}
        {/* <PersonAddIcon className='myteamtable-icons'/> */}
        <Button sx={{fontSize:'10px'}}>Add Member</Button>
      </a>
      <Modal title="Add Member" open={isModalOpen} onOk={()=>{onsubmitbtn(email,teamname,teamowner,teamemail)}} onCancel={handleCancel}>
        <p><span>Team:</span><b>{teamname}</b></p>
        <label>Member Email:</label>
        <input name='membermeail' onChange={(e)=>setEmail(e.target.value)}/>
      </Modal>
    </>
  );
};
export default AddMember;