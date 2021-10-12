import { Home } from '../features/home/Home';
import { Register } from '../features/register/Register';
import { Profile } from '../features/profile/Profile';

const routes = [
  {
    path: '/register',
    name: 'Register',
    Component: Register,
    exact: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    Component: Profile,
    exact: true,
    needLogin: true,
  },
  {
    path: '/',
    name: 'Home',
    Component: Home,
    exact: true,
  }
];

export default routes;
