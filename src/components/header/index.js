import { Col, Row } from 'antd';
import React from 'react';
import { HeaderContainer, Provider } from './style';
import LogoSite from 'assets/header/home.png';
import {
  DownOutlined,
  PrinterOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
export default function HeaderComponent() {
  return (
    <Provider>
      <HeaderContainer>
        <Row
          style={{ width: '100%' }}
          align="middle"
          justify="space-between"
          gutter={[16, 16]}
        >
          <Col className="content">
            <img className="link" src={LogoSite} alt="home" />
          </Col>

          <Col span={6} className="content">
            <span>교수소개</span>
            <DownOutlined />
          </Col>
          <Col span={6} className="content">
            <span>교수</span>
            <DownOutlined />
          </Col>
          <Col span={9} className="content-end">
            <PrinterOutlined />
            <ShareAltOutlined />
          </Col>
        </Row>
      </HeaderContainer>
    </Provider>
  );
}
