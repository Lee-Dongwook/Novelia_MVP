import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import styles from './header.module.css';
import headerLogo from '../../image/headerLogo.png';
import headerNotice from '../../image/headerNotice.png';
import headerUser from '../../image/headerUser.png';
import headerWrite from '../../image/headerWrite.png';

function Header() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <Row gutter={70}>
          <Col>
            <img src={headerLogo} alt='헤더로고' style={{width: '120px'}}/>
          </Col>
          <Col>
            <Input style={{width: 500, textAlign: 'center'}} type='text' placeholder='검색어를 입력하세요'/>
          </Col>
          <Col> 
            <img src={headerNotice} alt='헤더알림' style={{width: '25px', height: '25px'}} />
          </Col>
          <Col>
            <img src={headerWrite} alt='헤더작품등록' style={{width: '25px', height: '25px'}} />
          </Col>
          <Col>
            <img src={headerUser} alt='헤더마이페이지' style={{width: '25px', height: '25px'}} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
