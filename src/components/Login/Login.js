import { LoginForm, LoginInput, LoginLabel, LoginButton } from './LoginStyled';

export const Login = () => {
  return (
    <LoginForm>
      <LoginLabel>
        Email
        <LoginInput type="email"></LoginInput>
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInput type="password"></LoginInput>
      </LoginLabel>
      <LoginButton type="submit">Login</LoginButton>
    </LoginForm>
  );
};
