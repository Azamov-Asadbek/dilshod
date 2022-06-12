import { PlusOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import ItemComponent from './component/item';
import { HomeItems } from './component/list';
import { Body, Header, Provider } from './style';

export default function SegmentedComponent() {
  const [active, setActive] = useState(false);
  return (
    <Provider>
      <Header>
        <Row align="middle" justify="space-between">
          <Col span={22} md={10}>
            <Row align="middle">
              <div
                onClick={() => setActive(!active)}
                className={`${active ? '' : 'active'} btn`}
              >
                공지사항
              </div>
              <div
                onClick={() => setActive(!active)}
                className={`${!active ? '' : 'active'} btn`}
              >
                공지사항
              </div>
            </Row>
          </Col>
          <Col span={2} md={2} style={{ fontSize: '30px' }}>
            <PlusOutlined />
          </Col>
          <Col span={22} md={10}>
            <Row align="middle">
              <div className="btn active">공지사항</div>
            </Row>
          </Col>
          <Col span={2} md={2} style={{ fontSize: '30px' }}>
            <PlusOutlined />
          </Col>
        </Row>
      </Header>

      <Body>
        <Row align="middle" gutter={[32, 32]} justify="space-between">
          <Col span={24} md={12}>
            {HomeItems?.slice(0, 3).map((item, index) => (
              <ItemComponent key={index} item={item} />
            ))}
          </Col>
          <Col span={24} md={12}>
            {HomeItems?.slice(3).map((item, index) => (
              <ItemComponent key={index} item={item} />
            ))}
          </Col>
        </Row>
      </Body>
    </Provider>
  );
}
