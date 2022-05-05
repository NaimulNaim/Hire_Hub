import React from 'react'
import {Row, Col, Form, Input, Button} from 'antd'
import { loginUser } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


function Login() {
    const dispatch= useDispatch()

    function login(values){
        dispatch(loginUser(values))
    }

  return (
    <div className='login'>
    
    <Row justify='center'>
    <Col lg={5}><h1 className='heading1'  data-aos='slide-right'>Hire</h1></Col>
    <Col lg={10} sm={24} className="bs p-5 m-2 login-form">
    <h3>Login</h3>
        <Form layout= 'vertical' onFinish={login}>
          <Form.Item label="username" name="username" rules={[{require:true}]}>
             <Input/> 
              </Form.Item>  
              <Form.Item label="password" name="password" rules={[{require:true}]}>
             <Input/> 
              </Form.Item> 

              <Button htmlType= 'submit'>Login </Button> <br/>
              <Link to='/register'>Not register? Click here to register</Link>   
        </Form>

    </Col>
    <Col lg={5}><h1 className='heading2'  data-aos='slide-left'>Hub</h1></Col>
    </Row>
    
    </div>
  )
}

export default Login 