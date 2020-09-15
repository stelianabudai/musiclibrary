import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import AddGenre from './AddGenre'
import Songs from './Songs'
import AddSong from './AddSong'
import styled from 'styled-components'

const NavItem = styled(Link)`
  text-decoration: none;
  color: blue;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const App = () => (
  <div>
  <NavItem to="/home">Home</NavItem>
  <NavItem to="/addGenre">Add Genre</NavItem>
  <NavItem to="/addSong">Add Song</NavItem>
  <hr />

  <Switch>
    <Route path="/addGenre" component={AddGenre} />
    <Route path="/songs" component={Songs} />
    <Route path="/addSong" component={AddSong} />
    <Route path="/home" component={Home} />
  </Switch>
</div>
)

export default App
