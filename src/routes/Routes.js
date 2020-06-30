import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Sidenav from '../pages/Sidenav';
import Login from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu/font-awesome" component={Sidenav}/>
        <Redirect from="/menu/*" to="/menu/font-awesome" />
        <Route path="/" component={Login}/>
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
