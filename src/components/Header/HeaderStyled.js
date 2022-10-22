import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBar = styled.header`
  padding: 15px;
  background-color: lightyellow;
  margin: 0 auto;
  width: 500px;
  border-bottom: 1px solid black;
`;
export const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: orangered;
`;
export const Email = styled.p`
  margin: 0;
  font-weight: 700;
  color: orangered;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 250px;
`;
export const LogOutBtn = styled.button`
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
