import Typography from '@mui/material/Typography';
import { useAuth } from '../../hooks';
import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <StyledNavLink to="/">Home</StyledNavLink>
      </Typography>
      {isLoggedIn && (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
        </Typography>
      )}
    </>
  );
};
