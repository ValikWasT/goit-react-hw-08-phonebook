import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { HeaderBar, NavList, Link } from './HeaderStyled';
import { useAuth } from 'hooks';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();
  return (
    <HeaderBar>
      <Link to="/">Home</Link>

      <NavList>
        {isLoggedIn ? (
          <>
            <Link to="/contacts">Contacts</Link>
            <p>{user.email}</p>
            <button type="click" onClick={() => dispatch(logOut())}>
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </NavList>
    </HeaderBar>
  );
};
