import { PlusOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Header } from 'components/segmented/style';
import React from 'react';
import { list } from './list';
import { CardComp } from './styled';

export default function OverSectionComponent() {
  return (
    <Row>
      <Col span={24} md={12}>
        <Header>
          <Row align="middle" justify="space-between">
            <Col span={22}>
              <Row align="middle">
                <div className="btn active">공지사항</div>
              </Row>
            </Col>
            <Col span={2} style={{ fontSize: '30px' }}>
              <PlusOutlined />
            </Col>
          </Row>
        </Header>

        <div style={{ padding: 24 }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/-io9f_63anc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Col>
      <Col span={24} md={12}>
        <CardComp>
          {list?.map((item, index) => (
            <Row
              className="link"
              key={index}
              gutter={[16, 16]}
              align="middle"
              justify="space-between"
            >
              <Col>
                <a href={item.link}>{item.name}</a>
              </Col>
              <Col>
                <img src={item.img} alt={item.name} />
              </Col>
            </Row>
          ))}
        </CardComp>
      </Col>
    </Row>
  );
}
