import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined} from "@ant-design/icons";
import styles from './footer.module.css';

function Footer() {
  return (
    <div>
      <div className={styles.footerContainer}>
        <Row gutter={50}>
          <Col>
            <Link to="/privacy" className={styles.footerLink}>
              개인정보처리방침
            </Link>
          </Col>
          <Col>
            <Link to="/notice" className={styles.footerLink}>
              공지사항
            </Link>
          </Col>
          <Col>
            <Link to="/ask" className={styles.footerLink}>
              문의하기
            </Link>
          </Col>
          <Col>
            <Link to="/about" className={styles.footerLink}>
              서비스 설명
            </Link>
          </Col>
          <Col>
              <MailOutlined /> Business Mail : novelia000@gmail.com
          </Col>
          <Col>
            <div className="footer-text">All rights reserved</div>
          </Col>
          <Col>
            <FacebookOutlined />
          </Col>
          <Col>
            <TwitterOutlined />
          </Col>
          <Col>
            <InstagramOutlined />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
