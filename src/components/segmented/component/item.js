import { Col, Row } from 'antd';
import React from 'react';
import { Provider } from './style';

export default function ItemComponent({ item }) {
  return (
    <Provider>
      <Row>
        <Col span={4}>
          <div className="date">
            <span>{item?.day}</span>
            {item?.date}
          </div>
        </Col>
        <Col span={20}>
          <div>
            <a href="#" className="link1">
              {item?.title}
            </a>
          </div>
          <div>
            <a href="#" className="link2">
              {item?.subtitle}
            </a>
          </div>
        </Col>
      </Row>
    </Provider>
  );
}
