import React from 'react';
import { Layout, Menu } from 'antd';

import { LogoSite } from './style';

import KNU from 'assets/logos/home-logo.png';
const { Content, Footer, Sider } = Layout;

export function Sidebar({ children }) {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('학과소개', 'sub1', null, [
      getItem('인사말', '11'),
      getItem('학과연혁', '12'),
      getItem('학과소개', '13'),
      getItem('실습실소개', '14'),
      getItem('동아리소개', '15'),
      getItem('학생회소개', '16'),
      getItem('오시는 길', '17'),
    ]),
    getItem('교수소개', 'sub2', null, [
      getItem('교수', '21'),
      getItem('명예교수', '22'),
    ]),
    getItem('학사안내', 'sub3', null, [
      getItem('학사공지', '31'),
      getItem('교육과정', '32'),
      getItem('편성교과목', '33'),
      getItem('학사정보', '34'),
      getItem('학사일정', '35'),
    ]),
    getItem('입학안내', 'sub4', null, [getItem('모집요강', '41')]),
    getItem('커뮤니티', 'sub5', null, [
      getItem('공지사항', '51'),
      getItem('갤러리', '52'),
      getItem('서식자료실', '53'),
    ]),
  ];

  const onClick = (e) => {
    console.log('click', e);
  };

  return (
    <Layout>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <LogoSite effect="blur" width={200} src={KNU} />
        <Menu theme="light" onClick={onClick} mode="vertical" items={items} />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: 0,
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 0,
              minHeight: '84vh',
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Tashkent ©2022 Created by Azamov
        </Footer>
      </Layout>
    </Layout>
  );
}
