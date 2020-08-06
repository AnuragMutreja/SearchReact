import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Search from "./Component/Search";
import Filter from "./Component/filter";
function App() {
  return (
    <div className="App">

      <Router>
        <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/filter">Filter</Link></li>
        </ul>
          <Route path = "/search">
              <Search />
          </Route>
          <Route path = "/filter">
              <Filter />
          </Route>
      </Router>

    </div>
  );
}

export default App;
