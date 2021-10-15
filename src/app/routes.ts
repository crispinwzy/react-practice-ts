import { Home } from 'pages/home/Home';
import { Register } from 'pages/register/Register';
import { Profile } from 'pages/profile/Profile';

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
