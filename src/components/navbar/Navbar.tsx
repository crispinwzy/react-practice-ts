import { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { AuthState, selectAuth, logout} from 'features/auth/authSlice';
import './Navbar.scss';

export const Navbar: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const authState: AuthState = useAppSelector(selectAuth);
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    alert("Logged out!");
    history.push('/register');
  }

  return (
    <nav className="navbar">
      <ul className="left">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>

      <div className="right">
        Hello, {authState.isLoggedin ? authState.name : 'Guest'}!
        {authState.isLoggedin && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}