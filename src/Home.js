import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App.js';
import Search from './components/Search.js';
import Instructions from './components/Instructions.js';

class Home extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header className="App-header">
            <Route path='/' component={Search}/>
          </header>
          <Route exact path = '/' component={Instructions}/>
          <Route path='/:id' component={App}/>
        </div>
      </Router>
    )
  }
}

export default Home;