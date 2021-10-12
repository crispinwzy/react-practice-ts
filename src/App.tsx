import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import routes from './app/routes';
import { ProtectedRoute } from 'components/protectedRoute/ProtectedRoute';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Routes Registration */}
        <div className="main-content">
          <Switch>
            {routes.map(
              ({path, Component, exact, needLogin}) => {
                if (!needLogin) {
                  return <Route key={path} path={path} component={Component} exact={exact} />
                } else {
                  return <ProtectedRoute key={path} path={path} Component={Component} exact={exact} />
                }
              }
            )}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
