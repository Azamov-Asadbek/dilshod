import React from 'react';
import { Layout, Menu } from 'antd';

import { LogoSite } from './style';

import KNU from 'assets/logos/home-logo.png';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const items = [
    getItem('학과소개', 'sub1', null, [
      getItem('인사말', 'https://aisw.kangwon.ac.kr/aisw/intro/greetings.do'),
      getItem('학과연혁', 'https://aisw.kangwon.ac.kr/aisw/intro/history04.do'),
      getItem('학과소개', 'https://aisw.kangwon.ac.kr/aisw/intro/intro.do'),
      getItem('실습실소개', 'https://aisw.kangwon.ac.kr/aisw/intro/lab.do'),
      getItem('동아리소개', 'https://aisw.kangwon.ac.kr/aisw/intro/circle.do'),
      getItem('학생회소개', 'https://aisw.kangwon.ac.kr/aisw/intro/council.do'),
      getItem('오시는 길', 'https://aisw.kangwon.ac.kr/aisw/intro/location.do'),
    ]),
    getItem('교수소개', 'sub2', null, [
      getItem('교수', '/professors'),
      getItem(
        '명예교수',
        'https://aisw.kangwon.ac.kr/aisw/professor/emeritus-professor.do'
      ),
    ]),
    getItem('학사안내', 'sub3', null, [
      getItem(
        '학사공지',
        'https://www.kangwon.ac.kr/www/selectBbsNttList.do?bbsNo=37&key=1176&)'
      ),
      getItem(
        '교육과정',
        'https://aisw.kangwon.ac.kr/aisw/bachelor/curriculum.do'
      ),
      getItem(
        '편성교과목',
        'https://aisw.kangwon.ac.kr/aisw/bachelor/subject.do'
      ),
      getItem('학사정보', 'https://aisw.kangwon.ac.kr/aisw/bachelor/info.do'),
      getItem(
        '학사일정',
        'https://aisw.kangwon.ac.kr/aisw/bachelor/calendar.do'
      ),
    ]),
    getItem('입학안내', 'sub4', null, [
      getItem(
        '모집요강',
        'https://aisw.kangwon.ac.kr/aisw/admission/admission-guide.do'
      ),
    ]),
    getItem('커뮤니티', 'sub5', null, [
      getItem(
        '공지사항',
        'https://aisw.kangwon.ac.kr/aisw/community/notice.do'
      ),
      getItem('갤러리', 'https://aisw.kangwon.ac.kr/aisw/community/gallery.do'),
      getItem(
        '서식자료실',
        'https://aisw.kangwon.ac.kr/aisw/community/reference-room.do'
      ),
    ]),
  ];

  const onClick = (e) => {
    if (e?.key === '/professors') {
      navigate('/professors');
    } else {
      window.location.href = e.key;
    }
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
        <br />
        <br />
      </Layout>
    </Layout>
  );
}
