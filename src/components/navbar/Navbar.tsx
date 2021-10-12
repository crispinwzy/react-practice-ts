import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { AuthState, selectAuth, logout} from 'features/auth/authSlice';
import './Navbar.scss';

export function Navbar() {
  const dispatch = useAppDispatch();
  const authState: AuthState = useAppSelector(selectAuth);

  return (
    <nav className="navbar">
      <ul className="left">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>

      <div className="right">
        Hello, {authState.isLoggedin ? authState.name : 'Guest'}!
        {authState.isLoggedin && <button onClick={() => dispatch(logout())}>Logout</button>}
      </div>
    </nav>
  );
}