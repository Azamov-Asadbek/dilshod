import styled from 'styled-components';

export const Title = styled.h3`
  margin: 0 auto;
  padding: 0 0 35px 32px;
  font-weight: 700;
  font-size: 35px;
  line-height: 45px;
  color: #000;

  .submit-btn {
    background-color: black !important;
  }
`;
export const Provider = styled.div`
  .submit-btn {
    background-color: black !important;
    border-color: #000 !important;
    margin: 4px;
  }
`;
export const ProviderProfessor = styled.div`
  img {
    max-width: 100%;
  }
  .title {
    font-size: 20px;
    b {
      font-weight: 700;
      color: #000;
      line-height: 25px;
      word-wrap: break-word;
    }
  }

  .subtitle {
    max-width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    height: 26px;
    span {
      color: #666;
      padding: 0 10px 0 0;
      font-weight: 600;
      font-size: 17px;
      line-height: 22px;
    }
  }

  .btn-professor {
    display: inline-block;
    padding: 6px 10px 7px;
    min-width: 40px;
    border: 1px solid #ccc;
    background-color: #eee;
    font-size: 13px;
    color: #333;
    text-align: center;
    vertical-align: middle;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;
export const Line = styled.div`
  height: 2px;
  width: 90%;
  background-color: #000;
  margin: 16px auto 42px;
`;
