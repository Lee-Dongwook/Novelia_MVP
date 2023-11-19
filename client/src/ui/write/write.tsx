import { Upload, type UploadProps} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './write.module.css';
import { imageOnChange } from '../../lib/imageOnChange';
import { imageOnDrop } from '../../lib/imageOnDrop';

const {Dragger} = Upload;

const imageProps: UploadProps = {
    name: 'file',
    multiple: true,
    onChange: imageOnChange,
    onDrop: imageOnDrop
}

function Write() {
    return(
        <div className={styles.writeContainer}>
         <Dragger {...imageProps}>
            <InboxOutlined />
            <p>사진을 드래그하거나 클릭하여 업로드 할 수 있습니다.</p>
         </Dragger>
        </div>
    )
}

export default Write;