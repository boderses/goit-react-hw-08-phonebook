import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../redux/auth/thunks';
import { useAuth } from '../../hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </button>
    </div>
  );
};
