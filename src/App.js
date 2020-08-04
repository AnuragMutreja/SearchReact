import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Search from "./Component/Search"
import List from "./Component/List"
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/list">List</Link></li>
        </ul>
          <Route path="/search">
              <Search />
          </Route>
          <Route path="/list">
              <List />
          </Route>
      </Router>

    </div>
  );
}

export default App;
