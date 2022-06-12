import { Col, Row } from 'antd';
import HeaderComponent from 'components/header';
import React from 'react';
import InputsComponent from './components/inputs';
import Item from './components/professorItem';
import { Line, ProviderProfessor, Title } from './components/style';
import { proffessorsList } from './components/utils/lis';

export default function ProffessorsPage() {
  return (
    <ProviderProfessor>
      <HeaderComponent />
      <Title>교수</Title>
      <Row align="middle" justify="end">
        <Col span={12}>
          <InputsComponent />
        </Col>
        <Col span={24}>
          <Line />
        </Col>

        <Col style={{ padding: '0 60px' }} span={24}>
          <Row gutter={[16, 16]} align="middle" justify="center">
            {proffessorsList?.map((x, i) => (
              <Col
                style={{
                  marginBottom: '20px',
                  borderBottom: '1px solid #ccc',
                }}
                span={12}
              >
                <Item key={i} item={x} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </ProviderProfessor>
  );
}
