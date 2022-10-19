import { Button, Modal } from 'antd';
// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {POST} from '../../utils/api'
import Swal from "sweetalert2";

const AddMember = (props) => {

    const {teamname,teamowner}=props
    console.log('teamowner',teamowner)
    const [email,setEmail]=useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    
  },[])

  const onsubmitbtn=(memberEmail,teamname,teamowner)=>{
    handleOk()
    let memberdata={
        memberEmail,
        teamname,
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
        Add Member
      </a>
      <Modal title="Basic Modal" open={isModalOpen} onOk={()=>{onsubmitbtn(email,teamname,teamowner)}} onCancel={handleCancel}>
        <p><span>Team:</span><b>{teamname}</b></p>
        <label>Member Email:</label>
        <input name='membermeail' onChange={(e)=>setEmail(e.target.value)}/>
      </Modal>
    </>
  );
};
export default AddMember;