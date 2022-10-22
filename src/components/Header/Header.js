import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import {
  HeaderBar,
  NavList,
  Link,
  Email,
  NavContainer,
  LogOutBtn,
} from './HeaderStyled';
import { useAuth } from 'hooks';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();
  return (
    <HeaderBar>
      <NavList>
        <NavContainer>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </NavContainer>
        <NavContainer>
          {isLoggedIn ? (
            <>
              <Email>{user.email}</Email>
              <LogOutBtn type="click" onClick={() => dispatch(logOut())}>
                LogOut
              </LogOutBtn>
            </>
          ) : (
            <>
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </NavContainer>
      </NavList>
    </HeaderBar>
  );
};
