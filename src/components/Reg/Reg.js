import { RegForm, RegInput, RegLabel, RegButton } from './RegStyled';

export const Reg = () => {
  return (
    <RegForm>
      <RegLabel>
        Name
        <RegInput type="text"></RegInput>
      </RegLabel>
      <RegLabel>
        Email
        <RegInput type="email"></RegInput>
      </RegLabel>
      <RegLabel>
        Password
        <RegInput type="password"></RegInput>
      </RegLabel>
      <RegButton type="submit">Reg</RegButton>
    </RegForm>
  );
};
