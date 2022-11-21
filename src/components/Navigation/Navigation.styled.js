import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  &.active {
    border-bottom: 1px solid #ffffff;
  }
`;
