import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import Login from '../auth/Login';
import Logout from '../auth/Logout';
//import Activate from '../auth/Activate';
  //<Route path="/auth/activate" exact component={Activate} />;

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Logout" exact component={Logout} />
        </Switch>
      </Router>
    );
}

export default Routes;
