import { Col, Row } from 'antd';
import React from 'react';

export default function Item({ item }) {
  return (
    <Row
      style={{
        marginBottom: '20px',
      }}
      align="stretch"
      justify="space-around"
    >
      <Col span={8}>
        <img
          style={{ width: '90%', objectFit: 'cover' }}
          src={item?.img}
          alt="proffessor"
        />
      </Col>
      <Col span={14}>
        <p className="title">
          <b>{item?.name}</b> {item?.surname}
        </p>
        <p className="subtitle">
          <span>연구분야</span>
          {item?.title1}
        </p>
        <p className="subtitle">
          <span>연구실</span>
          {item?.title2}
        </p>
        <p className="subtitle">
          <span>연락처</span>
          {item?.title3}
        </p>
        <p className="subtitle">
          <span>이메일</span>
          {item?.title4}
        </p>

        <div>
          <a href={item?.Link} className="btn-professor">
            더보기
          </a>
        </div>
      </Col>
    </Row>
  );
}
