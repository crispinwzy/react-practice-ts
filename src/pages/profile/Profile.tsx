import './Profile.scss';
import { useAppSelector } from 'app/hooks';
import { AuthState, selectAuth } from 'app/store/slices/authSlice';
import { Weather } from 'components/weather/Weather';

export function Profile() {
  const auth: AuthState = useAppSelector(selectAuth);

  return (
    <div>
      <div className="profile-page">
        <h3>Profile</h3>
        <p>isLoggedin: {auth.isLoggedin ? 'Yes' : 'No'}</p>
        <p>Name: {auth.name}</p>
        <p>Email: {auth.email}</p>
      </div>

      {/* // Weather component */}
      <Weather />
    </div>
  );
}
