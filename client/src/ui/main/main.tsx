import React, { useEffect} from 'react';
import { Button } from 'antd';
import axios from 'axios';
import styles from './main.module.css';

function Main() {
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(response.data);
//       setLoading(false);
//     };
//     fetchData();
//   }, [setPosts]);

  return (
    <div>
      <div className={styles.selectButtonContainer}>
        <Button className={styles.selectButton}>추천순</Button>
        <Button className={styles.selectButton}>시간순</Button>
      </div>
    </div>
  );
}

export default Main;
