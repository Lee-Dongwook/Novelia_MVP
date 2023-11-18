import { Button, Carousel, Image } from 'antd';
import styles from './main.module.css';
import { imageSliderConfig } from '../../lib/imageSliderConfig';

function Main() {

  return (
    <div>
      <div>
        <Carousel {...imageSliderConfig}>
          <div>
            <Image />
          </div>
          <div>
            <Image />
          </div>
        </Carousel>
      </div>
      <div className={styles.selectButtonContainer}>
        <Button className={styles.selectButton}>추천순</Button>
        <Button className={styles.selectButton}>시간순</Button>
      </div>
    </div>
  );
}

export default Main;
