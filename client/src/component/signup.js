import { Button, Form, Input, } from 'antd';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import allPaths from '../config/path'
import { Sign_Up } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AUTH} from '../utils/api'
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


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

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
};
const SignupForm = () => {
  const [userdata, setuserdata] = useState({})
  const dispatch = useDispatch()
  const Navigate=useNavigate()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // dispatch(Sign_Up(values))
    console.log('AUTH?.USERSIGNUP',AUTH)
    axios.post(`http://localhost:4000${AUTH.USERSIGNUP}`,values)
    .then((res) => {
      console.log("res.data?.status", res.data);
      if (res.data?.status === "success") {
        Swal.fire({
          icon: res.data.status,
          text: res.data.message,
        });
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
  // Navigate('/home')
 

  return (
    <Form
    {...formItemLayout}

      name="register"
      onFinish={onFinish}
      validateMessages={validateMessages}


      className='myform'
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <div className='iconwithinput'>
          <PersonIcon className='signupform-icon-div' />
          <Input className='signup-form-inputs' name='name' />
        </div>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
            required: true,
            message: 'Please input your E-mail!',
          },
          {
          },
        ]}
      >
        <div className='iconwithinput'>
          <EmailIcon className='signupform-icon-div' />
          <Input className='signup-form-inputs' name='email' />
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
        <div className='iconwithinput'>
          <LockIcon className='signupform-icon-div' />
          <Input className='signup-form-inputs' name='password' />
        </div>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}

        rules={[
          {
            required: true,
            // message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <div>
          <LockIcon className='signupform-icon-div' />
          <Input className='signup-form-inputs' />
        </div>

      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className='registerbtn'>
          Register
        </Button>
      </Form.Item>
      <p>Already have account then<Link to='/'> Click here</Link></p>
    </Form>
  );
};
export default SignupForm;