import { FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from 'app/hooks';
import { AuthState, selectAuth } from 'features/auth/authSlice';

type ProtectedRouteProp = {
  path: string,
  Component: Function,
  exact: boolean
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProp> = ({ Component, ...rest }) => {
  const authState: AuthState = useAppSelector(selectAuth);
  const component = Component();

  return (
    <Route
      {...rest}
      render={(props) => {
          if (authState.isLoggedin) {
            return component;
          } else {
            alert("This page requires you to register first");
            return <Redirect to={{ pathname: '/register' }} />
          }
        }
      }
    />
  );
}