import { Home } from '../features/home/Home';
import { Register } from '../features/register/Register';
import { Profile } from '../features/profile/Profile';

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    exact: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  }
];

export default routes;
