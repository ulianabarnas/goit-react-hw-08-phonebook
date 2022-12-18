import { useDispatch } from 'react-redux';
import { authSlice } from 'redux/auth/slice';
import { Link } from './AuthNav.styles';

export default function AuthNav() {
  const dispatch = useDispatch();

  const reset = () => dispatch(authSlice.actions.resetState())

  return (
    <div>
      <Link to="/register" onClick={reset}>Register</Link>
      <Link to="/login" onClick={reset}>Log In</Link>
    </div>
  );
}
