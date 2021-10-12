import { Link } from 'react-router-dom';

import { useAppSelector } from 'app/hooks';
import { AuthState, selectAuth } from 'features/auth/authSlice';

export function Navbar() {
  const authState: AuthState = useAppSelector(selectAuth);

  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
      </ul>

      <div>
        Hello, {authState.isLoggedin ? authState.name : 'Guest'}!
      </div>
    </nav>
  );
}