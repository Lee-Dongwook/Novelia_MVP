import {Card} from 'antd';
import styles from './detail.module.css';

const { Meta } = Card;

function Detail() {
    return(
        <div className={styles.detailContainer}>
          <Card>
            <Meta title="" description = ""/>
          </Card>
        </div>
    )
}

export default Detail;