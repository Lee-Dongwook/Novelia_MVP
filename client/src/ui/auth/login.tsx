import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import styles from './login.module.css'

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  return (
    <div>
      <div className={styles.loginContainer}>
      <Form className= {styles.loginForm} form={form} labelCol={{span: 6}} wrapperCol={{span: 15}}>
        <Form.Item name = "email" label = "이메일" rules={[{required: true, message: '회원님의 이메일을 입력해주세요'}]}>
           <Input type='email' placeholder="이메일을 입력해주세요." />
        </Form.Item>
        <Form.Item name = "password" label = "비밀번호" rules={[{required: true, message: '회원님의 비밀번호를 입력해주세요'}]}>
            <Input type='password' placeholder="비밀번호를 입력해주세요." /> 
        </Form.Item>
        <Form.Item wrapperCol={{offset: 10}}>
          <Button type="primary" htmlType="submit">
            로그인하기
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
}

export default Login;
