import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import type { Role, Platform ,Author, Reader } from '../../domain/user';
import styles from './signup.module.css'

const { Option } = Select;
const platformOptions: Array<{label: Platform, value: Platform}> = [
    { label: '네이버시리즈', value: '네이버시리즈' },
    { label: '카카오페이지', value: '카카오페이지' },
    { label: '네이버웹소설', value: '네이버웹소설' },
    { label: '카카오스테이지', value: '카카오스테이지' },
    { label: '문피아', value: '문피아' },
    { label: '조아라', value: '조아라' },
    { label: '없음', value: '없음'}
];

function SignUp() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [userType, setUserType] = useState<Role>();

  const handleChangeUserType = (value: Role) => {
    setUserType(value);
  };

  const handleUpdateUserInfo = (values: Author | Reader) => {

    if(values.role === 'author')
    {
        const authorInfo = values;
        console.log(authorInfo);
        if(!authorInfo){
          alert('회원가입에 오류가 발생하였습니다.')
          return;
        }
        alert('회원가입이 완료되었습니다. 로그인페이지로 이동합니다.');
        navigate('/login');
    } 
    else if(values.role === 'reader')
    {
        const readerInfo = values;
        if(!readerInfo){
            alert('회원가입에 오류가 발생하였습니다.')
            return;
        }
        alert('회원가입이 완료되었습니다. 로그인페이지로 이동합니다');
        navigate('/login');
    }
  };


  return (
    <div>
      <div className={styles.signUpContainer}>
      <Form className= {styles.signUpForm} form={form} onFinish={handleUpdateUserInfo}  labelCol={{span: 6}} wrapperCol={{span: 15}}>
        <Form.Item name="nickname" label="닉네임" rules={[{ required: true, message: '회원님이 사용하실 닉네임을 입력해주세요' }]}>
          <Input type='text' placeholder="회원님이 사용하실 닉네임을 입력해주세요." />
        </Form.Item>
        <Form.Item name="gender" label="성별" rules={[{ required: true, message: '회원님의 성별을 선택해주세요' }]}>
          <Select>
            <Option value="Male">남</Option>
            <Option value="Female">여</Option>
          </Select>
        </Form.Item>
        <Form.Item name = "age" label="나이" rules={[{required: true, message: '회원님의 나이를 입력해주세요'}]}>
           <Input type='text' placeholder="나이를 숫자로 입력해주세요." />
        </Form.Item>
        <Form.Item name = "email" label = "이메일" rules={[{required: true, message: '회원님의 이메일을 입력해주세요'}]}>
           <Input type='email' placeholder="이메일을 입력해주세요." />
        </Form.Item>
        <Form.Item name = "password" label = "비밀번호" rules={[{required: true, message: '회원님의 비밀번호를 입력해주세요'}]}>
            <Input type='password' placeholder="비밀번호를 입력해주세요." /> 
        </Form.Item>
        <Form.Item name="phone" label="핸드폰" rules={[{required: true, message: '회원님의 핸드폰 번호를 입력해주세요'}]}>
           <Input type='text' placeholder="핸드폰 번호를 입력해주세요." />
        </Form.Item>
        <Form.Item name="platform" label="플랫폼">
            <Checkbox.Group options={platformOptions} />    
        </Form.Item>
        <Form.Item name="role" label="역할구분" rules = {[{required: true, message: '원하는 서비스 경험을 위해 회원님의 역할을 선택해주세요.'}]}>
        <Select onChange={handleChangeUserType}>
          <Option value="author">작가</Option>
          <Option value="reader">독자</Option>
        </Select>
        </Form.Item>
        {userType ? (userType === 'author' ? (
          <Form.Item name="career" label="경력기간">
            <Select>
                <Option value="freshman">신입</Option>
                <Option value="junior">1년 미만</Option>
                <Option value="senior">1년 이상 3년 미만</Option>
                <Option value="expert">3년 이상</Option>
            </Select>
          </Form.Item>
        ) : (
            <Form.Item name="experience" label="웹소설 선호도">
            <Select>
                <Option value="usually">자주 즐겨 읽는다.</Option>
                <Option value="often">가끔 읽는다.</Option>
                <Option value="sometimes">거의 읽지 않는다.</Option>
                <Option value="never">읽어본 적이 없다.</Option>
            </Select>
          </Form.Item>
        )) : ""}
        <Form.Item wrapperCol={{offset: 10}}>
          <Button type="primary" htmlType="submit">
            등록하기
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
}

export default SignUp;
