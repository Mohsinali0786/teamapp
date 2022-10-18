import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
const { Column, ColumnGroup } = Table;
export default function MyTeam() {
  const dataRedux = useSelector((state) => state.AllUsers)
  let myTeam = dataRedux?.MyTeams
  myTeam=myTeam.filter((teams,index)=>teams.isDeleted===false)
  console.log('data in table', myTeam)
  useEffect(()=>{

  },[])
  return (
    <div>
      <h4>My Teams</h4>
        < Table dataSource={myTeam} size='small' scroll={{ y: 130 }} >
          <ColumnGroup columnWidth='20px'>
            <Column title="TeamName " dataIndex="teamname" key="teamname" />
            <Column title="TeamEmail" dataIndex="teamemail" key="teamemail" />
            {/* <Column title="UserEmail" dataIndex="useremail" key="useremail" /> */}

          </ColumnGroup>
          {/* <Column
            title="Action"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <a>Delete</a>
                <a>Edit</a>
              </Space>
            )}
          /> */}
        </Table >
    </div>
  );
}
