import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios';
import { POST } from '../../utils/api';
import { getTeamsByLoginUser } from '../../store/actions';
import { Button } from '@mui/material';
const { Column, ColumnGroup } = Table;
export default function MyTeam() {


  const dispatch = useDispatch()
  const dataRedux = useSelector((state) => state.AllUsers)
  const current_login = dataRedux?.LoginUser?.data
  let myTeam = dataRedux?.MemberOfATeams
  // myTeam=myTeam?.filter((teams,index)=>teams?.isDeleted===false)
  console.log('data in table', dataRedux)
  useEffect(() => {

    // console.log('team member table useeffect')
    axios.post(`http://localhost:4000${POST?.GETTEAMBYLOGINUSER}`, current_login).then((res) => {
      console.log(res.data, 'res.data in teammembertable')
      dispatch(getTeamsByLoginUser(res.data.Members_in_Teams))
      // return res.data
      // console.log(res.data.Teams, "=res=")

    }).catch((err) => {
      console.log('Error====>', err)
    })

  }, [])
  return (
    <div className=''>
      <h4>Members of a Team</h4>
      <div className='myteamtable-Main-div'>
        {
          myTeam?.map((v, i) => {
            return (
              <div className='myteamtable-div'>
                <p className='myteamtable-teamname-heading'>{v.teamname}</p>
                <p>{v.teamowner}</p>
                <div>
                  <Button sx={{ fontSize: '10px' }}>View Description</Button>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* < Table dataSource={myTeam} size='small' scroll={{ y: 150 }} >
          <ColumnGroup columnWidth='20px'>
            <Column title="TeamName " dataIndex="teamname" key="teamname" />
            <Column title="Team Owner" dataIndex="teamowner" key="teamowner" />
          </ColumnGroup>
  
        </Table > */}
    </div>
  );
}
