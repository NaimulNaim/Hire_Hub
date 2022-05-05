import React from 'react'
import {Row, Col, Form, Input, Button,message} from 'antd'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions/userActions'
import { Link } from 'react-router-dom'

function Register() {
    const dispatch = useDispatch()
    function register(values){
        
        if(values.password!==values.confirmpassword){
            message.error("password not matched")
        }
        else{
            console.log(values)
            dispatch(registerUser(values))
        }
    }

  return (
    <div className='register'>
    
    <Row justify='center'>
    <Col lg={5}><h1 className='heading1'  data-aos='slide-right'>Hire</h1></Col>
    <Col lg={10} sm={24} className="bs p-5 m-2 register-form">
         <h3>Register</h3>
        <Form layout= 'vertical' onFinish={register}>
          <Form.Item label="Username" name="username" required rules={[{required : true}]}>
             <Input/> 
              </Form.Item>  
              <Form.Item label="Password" name="password" required rules={[{required : true}]}>
             <Input/> 
              </Form.Item> 
              <Form.Item label="Confirm Password" name="confirmpassword" required rules={[{required : true}]}>
             <Input/> 
              </Form.Item> 

              <Button htmlType= 'submit'>Register </Button> <br />
               <Link to='/login' className='mt-3'>Already registered ? , Click here to login</Link> 
        </Form>

    </Col>
    <Col lg={5}><h1 className='heading2'  data-aos='slide-left'>Hub</h1></Col>
    </Row>
    
    </div>
  )
}

export default Register