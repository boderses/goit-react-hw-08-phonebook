import Button from '@mui/material/Button';
import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Button color="inherit">
        <StyledNavLink to="/register">Register</StyledNavLink>
      </Button>
      <Button color="inherit">
        <StyledNavLink to="/login">Login</StyledNavLink>
      </Button>
    </div>
  );
};
