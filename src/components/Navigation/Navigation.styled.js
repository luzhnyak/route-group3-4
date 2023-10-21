import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: green;
  font-size: 18px;
  &.active {
    color: blue;
  }
`;
