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
// import { Counter } from './features/counter/Counter';
import { Navbar } from './components/navbar/Navbar';
import routes from './app/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Routes Registration */}
        <Switch>
          {routes.map(
            ({path, component, exact}) => <Route key={path} path={path} component={component} exact={exact} />
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
