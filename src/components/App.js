import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Add from './Add';


const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add">Add</Link></li>
    </ul>

    <hr />

    <Switch>
      <Route path="/add" component={Add} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
