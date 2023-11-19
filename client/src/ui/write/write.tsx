import {Form, Card, Select ,Input, Upload, type UploadProps} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './write.module.css';
import { imageOnChange } from '../../lib/imageOnChange';
import { imageOnDrop } from '../../lib/imageOnDrop';

const { Dragger } = Upload;
const { Option } =  Select;
const { TextArea } = Input;

const imageProps: UploadProps = {
    name: 'file',
    multiple: true,
    onChange: imageOnChange,
    onDrop: imageOnDrop
}

function Write() {
    return(
        <div className={styles.writeContainer}>
         <Card title="기본 작품 정보 입력">
         <Dragger {...imageProps}>
            <InboxOutlined />
            <p>사진을 드래그하거나 클릭하여 업로드 할 수 있습니다.</p>
         </Dragger>
         <Form>
         <Form.Item label="제목">
            <Input type='text' />
         </Form.Item> 
         <Form.Item label="장르선택">
            <Select>
            <Option value="판타지">판타지</Option>
            <Option value="무협">무협</Option>
            <Option value="게임">게임</Option>
            </Select>
        </Form.Item>
        <Form.Item label="태그등록">
            <Select mode='tags'/>
        </Form.Item>
        <Form.Item label="작품설명">
            <TextArea rows={4} placeholder='최대 500자' maxLength={500} />
        </Form.Item>
         </Form>
        </Card>
        <Card title ="작품 퀴즈 등록">
         <Form.Item label="질문 내용">
            <TextArea rows={2} placeholder='최대 50자' maxLength={50} />
         </Form.Item>
         <Form.Item label="정답 보기">
            <Input type='text' />
         </Form.Item>
         <Form.Item label="오답 보기">
            <Input type='text' />
         </Form.Item>
         <Form.Item label="오답 보기">
            <Input type='text' />
         </Form.Item>
        </Card>
        </div>
    )
}

export default Write;