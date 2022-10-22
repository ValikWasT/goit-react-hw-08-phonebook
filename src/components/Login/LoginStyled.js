import styled from 'styled-components';
export const LoginForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 150px;
  margin-top: 20px;
`;
export const LoginLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const LoginInput = styled.input``;
export const LoginButton = styled.button`
  margin: 0 auto;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: blue;
  color: yellow;
  height: 25px;
  width: 100px;
  &:hover {
    background-color: yellow;
    color: blue;
  }
`;
