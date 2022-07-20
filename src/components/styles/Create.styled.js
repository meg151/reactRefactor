import styled from 'styled-components';

export const Create = styled.div`
  .create {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .create label {
    text-align: left;
    display: block;
  }
  .create h2 {
    font-size: 20px;
    color: #f1356d;
    margin-bottom: 30px;
  }
  .create input,
  .create textarea,
  .create select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }
  .create button {
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default Create;
