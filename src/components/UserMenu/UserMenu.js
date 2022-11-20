import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/thunks';
import { useAuth } from '../../hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <p>Welcome, {user}</p>
      <Button type="button" color="inherit" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
