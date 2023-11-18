import { Button, Carousel, Image } from 'antd';
import styles from './main.module.css';
import { imageSliderConfig } from '../../lib/imageSliderConfig';
import banner from '../../image/banner.png';

function Main() {

  return (
    <div>
      <div className = {styles.imageSliderContainer}>
        <Carousel {...imageSliderConfig}>
          <div>
            <Image src={banner} alt='배너' style={{height: 'calc(20vh)'}} />
          </div>
          <div>
            <Image src={banner} alt='설명' style={{height: 'calc(20vh)'}}/>
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
