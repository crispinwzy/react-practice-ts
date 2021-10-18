import { FunctionComponent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectAuth, logout} from 'app/store/slices/authSlice';
import { AuthState } from 'app/models/Auth';
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
      <div className="left">
        <span className="brand-name">React Practice</span>
        <ul>
          <li><Link to='/'>Home</Link></li>
          {/* <li><Link to='/register'>Register</Link></li> */}
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </div>

      <div className="right">
        Hello, {authState.isLoggedin ? authState.name : 'Guest'}!
        
        <span className="actions">
          {authState.isLoggedin ? <button onClick={handleLogout}>Logout</button> : <Link to='/register'>Register</Link>}
        </span>
      </div>
    </nav>
  );
}