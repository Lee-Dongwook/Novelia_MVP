import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { BellOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import styles from './header.module.css';

function Header() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <Row gutter={50}>
          <Col>
            Noveila
          </Col>
          <Col>
            <Input type='text' placeholder='검색어를 입력하세요'/>
          </Col>
          <Col>
            <BellOutlined />
          </Col>
          <Col>
            <EditOutlined />
          </Col>
          <Col>
            <UserOutlined />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
