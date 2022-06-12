import styled from 'styled-components';

export const Provider = styled.div`
  width: 100%;
`;
export const Body = styled.div`
  width: 100%;
  padding: 32px;
`;
export const Header = styled.div`
  width: 100%;
  padding: 1rem;
  .btn {
    font-size: 28px;
    line-height: 38px;
    padding: 4px 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    &.active {
      font-weight: 700;
    }
    &:nth-of-type(2) {
      border-left: 1px solid #ccc;
    }
  }
`;
