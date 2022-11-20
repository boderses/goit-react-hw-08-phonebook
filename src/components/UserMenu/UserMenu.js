import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/thunks';
import { useAuth } from '../../hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
