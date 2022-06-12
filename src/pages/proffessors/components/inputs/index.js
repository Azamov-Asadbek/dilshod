import { Button, Col, Input, Row, Select } from 'antd';
import React from 'react';
import { Provider } from '../style';
const { Option } = Select;

export default function InputsComponent() {
  return (
    <Provider>
      <Row align="middle" justify="start">
        <Col span={5}>
          <Select
            size="large"
            disabled={true}
            defaultValue="disabled"
            style={{
              width: 120,
            }}
          >
            <Option value="disabled" disabled>
              이름
            </Option>
          </Select>
        </Col>
        <Col span={10}>
          <Input size="large" placeholder="검색어를 입력해 주세요" />
        </Col>
        <Col span={9}>
          <Button className="submit-btn" type="primary" size="large">
            검색
          </Button>
        </Col>
      </Row>
    </Provider>
  );
}
