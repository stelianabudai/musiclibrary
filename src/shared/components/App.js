import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import Add from './Add'
import Songs from './Songs'
import AddSong from './AddSong'


const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add">Add</Link></li>
    </ul>

    <hr />

    <Switch>
      <Route path="/add" component={Add} />
      <Route path="/songs" component={Songs} />
      <Route path="/addSong" component={AddSong} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
