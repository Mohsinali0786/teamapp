import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import {POST} from '../../utils/api'
import Swal from "sweetalert2";
import { getTeams } from "../../store/actions";


const { Column, ColumnGroup } = Table;

export default function MyTeam() {
  const [deletedbtn,setdeletedbtn]=useState(false)
  
  const dispatch = useDispatch()
  const dataRedux = useSelector((state) => state.AllUsers)
  console.log('data Redux',dataRedux)
  let myTeam = dataRedux?.MyTeams
  // console.log('++>>',dataRedux?.LoginUser?.data?.email)
  myTeam=myTeam.filter((teams,index)=>teams?.isDeleted===false&& teams?.useremail===dataRedux?.LoginUser?.data.email)
  console.log('myteam',myTeam)
  // console.log('data in table', myTeam)
  useEffect(()=>{
    console.log('use effect')
    setdeletedbtn(false)
  },[deletedbtn===true])
  const deletedata=(index)=>{
    axios.post(`http://localhost:4000${POST?.DELETETEAM}/${index}`)
    .then((res) => {
      console.log('====>',res.data)
      if (res.data?.status === "success") {
        Swal.fire({
          icon: res.data.status,
          text: res.data.message,
        });
        setdeletedbtn(true)
        dispatch(getTeams(res.data.AllTeams))
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
    <div>
      <h4>My Teams</h4>
        < Table dataSource={myTeam} size='small' scroll={{ y: 130 }} >
          <ColumnGroup columnWidth='20px'>
            <Column title="TeamName " dataIndex="teamname" key="teamname" />
            <Column title="TeamEmail" dataIndex="teamemail" key="teamemail" />
            {/* <Column title="UserEmail" dataIndex="useremail" key="useremail" /> */}

          </ColumnGroup>
          {/* <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" /> */}

          <Column
            title="Action"
            key="action"
            render={(_, record,index) => (
              <Space size="middle">
                <a onClick={(e)=>deletedata(record._id)}>Delete</a>
                <a>View</a>

              </Space>
            )}
          />
        </Table >
    </div>
  );
}
