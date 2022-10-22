import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegForm, RegInput, RegLabel, RegButton } from './RegStyled';
import { register } from 'redux/auth/authOperations';

export const Reg = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <RegForm onSubmit={handleSubmite}>
      <RegLabel>
        Name
        <RegInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></RegInput>
      </RegLabel>
      <RegLabel>
        Email
        <RegInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></RegInput>
      </RegLabel>
      <RegLabel>
        Password
        <RegInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></RegInput>
      </RegLabel>
      <RegButton type="submit">Reg</RegButton>
    </RegForm>
  );
};
