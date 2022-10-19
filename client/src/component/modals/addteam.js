import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Modal, Form, Input } from 'antd';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import {POST} from '../../utils/api'
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';
import { getTeam } from '../../utils/helper';
import { useDispatch } from 'react-redux';

const AddTeamModal = () => {
    const dispatch=useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addteam,setaddteam]=useState(false)
    const dataRedux=useSelector((state)=>state)

    console.log('dataRedux in add team',dataRedux)
    useEffect(()=>{
        getTeam(dispatch)
        setaddteam(false)

    },[addteam===true])
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', POST?.ADDTEAM);
        let data={
            ...values,
            useremail:dataRedux?.AllUsers?.LoginUser?.data?.email
        }
        console.log('data',data)
        axios.post(`http://localhost:4000${POST?.ADDTEAM}`,data)
        .then((res) => {
            console.log("res.data?.status", res.data);
            if (res.data?.status === "success") {
              Swal.fire({
                icon: res.data.status,
                text: res.data.message,
              });
              setaddteam(true)
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
          
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            {/* <Button type="primary" > */}
            <AddIcon className='add-team-icon' onClick={showModal}/>
            {/* </Button> */}
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }}
>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Team Name"
                        name="teamname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your team!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Team Email"
                        name="teamemail"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your team email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Add Team
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default AddTeamModal