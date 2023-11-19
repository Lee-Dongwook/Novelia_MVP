import {message} from 'antd';

export const imageOnChange = (info: any) => {
    const {status} = info.file;
    if(status !== 'uploading'){
        console.log(info.file, info.fileList);
    }

    if(status === 'done') {
       return message.success(`${info.file.name} file upload successfully.`);
    }
    else if(status === 'error'){
        return message.error(`${info.file.name} file upload failed`);
    }
}