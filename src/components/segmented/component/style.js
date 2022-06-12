import styled from 'styled-components';

export const Provider = styled.div`
  width: 100%;
  padding: 16px 0;
  border-bottom: 2px dotted #ccc;
  .date {
    display: inline-block;
    padding: 8px 0;
    width: 66px;
    height: 66px;
    border: 1px solid #1f51a2;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    color: #999;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    span {
      display: block;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #1f51a2;
    }
  }

  .link1 {
    position: relative;
    display: inline-block;
    max-width: 100%;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
  .link2 {
    position: relative;
    display: inline-block;
    max-width: 100%;
    font-weight: 200;
    font-size: 16px;
    line-height: 21px;
    color: #727272;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid #727272;
    }
  }
`;
