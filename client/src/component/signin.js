import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { AUTH } from '../utils/api'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user_login } from '../store/actions';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const SigninForm = () => {
  const [form] = Form.useForm();
  const Navigate=useNavigate()
  const dispatch=useDispatch()
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post(`http://localhost:4000${AUTH.USERLOGIN}`, values)
      .then((res) => {
        console.log("res.data?.status", res.data);
        if (res.data?.status === "success") {
          Swal.fire({
            icon: res.data.status,
            text: res.data.message,
          });
          Navigate('/home')
          dispatch(user_login(values))
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
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
      className='myform'
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <div>
          <EmailIcon className='signinform-icon-div' />
          <Input className='signup-form-inputs' />
        </div>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <div>
          <LockIcon className='signinform-icon-div' />
          <Input className='signup-form-inputs' />
        </div>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className='loginbtn'>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SigninForm;