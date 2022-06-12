import styled from 'styled-components';
export const Provider = styled.div`
  width: 100%;
  padding: 32px;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 55px;
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  .link {
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
  }
  .content {
    border-right: 1px solid #929fcc;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-end {
    display: flex;
    align-items: center;
    justify-content: end;
    svg {
      font-size: 22px;
      margin-right: 8px;
      color: #c7c5c5;
      cursor: pointer;
    }
  }
`;
