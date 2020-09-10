import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import styled from 'styled-components';


// Our single Styled Component definition
const AppContainer = styled.div`
  font-size: 1rem;
  color: blue;

`;

const App = () => (
  <AppContainer>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

    <hr />

    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
  </AppContainer>
);

export default App;
