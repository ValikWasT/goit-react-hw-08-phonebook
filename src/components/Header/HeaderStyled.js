import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: lightyellow;
  margin: 0 auto;
  width: 500px;
  border-bottom: 1px solid black;
`;
export const NavList = styled.nav`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 700;
  color: orangered;
`;
