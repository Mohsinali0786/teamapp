import { Descriptions, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import { POST } from '../../utils/api'
import Swal from "sweetalert2";
import { getTeams } from "../../store/actions";
import { getTeam } from '../../utils/helper';
import AddMember from '../modals/addmembermodal';
import ViewMembers from '../modals/viewMembers';
import EditTeamName from '../modals/editTeamName';
import Description from '../../screen/Description/description';

import { getTeamsByLoginUser } from '../../store/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import {get_team_by_loginuser} from '../../utils/helper'
import { useNavigate } from 'react-router-dom';


const { Column, ColumnGroup } = Table;
export default function MyTeam(props) {
  const Navigate=useNavigate()
  const [deletedbtn, setdeletedbtn] = useState(false)
  const [editTeamName,setEditTeamName]=useState(false)
  const { memberadded, setmemberadded } = props

  const dispatch = useDispatch()
  const dataRedux = useSelector((state) => state.AllUsers)
  const current_login = dataRedux?.LoginUser?.data

  console.log('data Redux', dataRedux)
  let myTeam = dataRedux?.MyTeams
  // console.log('++>>',dataRedux?.LoginUser?.data?.email)
  myTeam = myTeam?.filter((teams, index) => teams?.isDeleted === false && teams?.useremail === dataRedux?.LoginUser?.data?.email)
  // console.log('myteam',myTeam)
  // console.log('data in table', myTeam)
  console.log('deleted',deletedbtn)
  useEffect(() => {
    console.log('use effect in my table')
    getTeam(dispatch)
    get_team_by_loginuser(dispatch,current_login)
    setdeletedbtn(false)
  }, [deletedbtn === true])
  const deletedata = (index) => {
    axios.post(`http://localhost:4000${POST?.DELETETEAM}/${index}`)
      .then((res) => {
        console.log('res.data====>', res.data)
        if (res.data?.status === "success") {
          Swal.fire({
            icon: res.data.status,
            text: res.data.message,
          });
          setdeletedbtn(true)
          dispatch(getTeams(res.data.AllTeams))
          getTeam(dispatch)
          // dispatch(getTeamsByLoginUser(res.data.Members_in_Teams))

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
    <div className='myteamtable-MainParent' >
      <h3>My Teams</h3>
      <div className='myteamtable-Main-div'>
        {
          myTeam.map((v, i) => {
            return (
              <div className='myteamtable-div mobile-teamtable'>
                <h4 className='myteamtable-teamname-heading'>
                  {v.teamname}
                  <EditTeamName editTeamName={true} color='white' teamid={v._id} teamname={v.teamname} />
                  <div className='myteamtable-deleteicon'>
                    <ViewMembers color='white' teamname={v.teamname} teamowner={v.useremail} teamemail={v.teamemail} />
                    <a onClick={(e) => deletedata(v._id)}><DeleteIcon className='myteamtable-icons' sx={{color:'white'}}  /></a>
                  </div>
                </h4>
                <p>{v.teamemail}
                  <EditTeamName  teamid={v._id} teamname={v.teamname} />
                </p>
                <div>
                  <Button  sx={{fontSize:'10px'}} onClick={()=>{Navigate('/description',{state:v})}}>View Description</Button>
                  
                  {/* <Description teamname={v.teamname} teamowner={v.useremail} teamemail={v.teamemail}/> */}
                  {/* <EditTeamName teamid={v._id} teamname={v.teamname} /> */}
                </div>
                <div>
                  <AddMember memberadded={memberadded} setmemberadded={setmemberadded} teamname={v.teamname} teamowner={v.useremail} teamemail={v.teamemail} />
                </div>
                {/* <div className=''>
                </div> */}
                <div></div>
              </div>
            )
          })
        }
      </div>
      {/* < Table dataSource={myTeam} size='small' scroll={{ y: 150 }} >
        <ColumnGroup columnWidth='50px' className='myteamtable-table'>
          <Column title="TeamName " dataIndex="teamname" key="teamname" />
          <Column title="TeamEmail" dataIndex="teamemail" key="teamemail" />
        </ColumnGroup>
        <Column
          title="Action"
          key="action"
          render={(_, record, index) => (
            <Space size="middle" >
              <div className=''>
                <EditTeamName teamid={record._id} teamname={record.teamname} />
                <a onClick={(e) => deletedata(record._id)}><DeleteIcon className='myteamtable-icons'/></a>
              </div>
              <div className=''>
                <ViewMembers teamname={record.teamname} teamowner={record.useremail} teamemail={record.teamemail} />
                <AddMember memberadded={memberadded} setmemberadded={setmemberadded} teamname={record.teamname} teamowner={record.useremail} teamemail={record.teamemail} />
              </div>
            </Space>
          )}
        />
      </Table > */}
    </div>
  );
}
