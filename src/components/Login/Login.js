import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LoginForm, LoginInput, LoginLabel, LoginButton } from './LoginStyled';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmite = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <LoginForm onSubmit={handleSubmite}>
      <LoginLabel>
        Email
        <LoginInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></LoginInput>
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></LoginInput>
      </LoginLabel>
      <LoginButton type="submit">Login</LoginButton>
    </LoginForm>
  );
};
