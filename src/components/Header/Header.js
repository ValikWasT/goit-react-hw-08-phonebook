import { HeaderBar, NavList, Link } from './HeaderStyled';

export const Header = () => {
  return (
    <HeaderBar>
      <NavList>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </NavList>
    </HeaderBar>
  );
};
