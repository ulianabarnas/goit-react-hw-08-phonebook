import { Link } from './AuthNav.styles';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}
