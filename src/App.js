import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";

import './reset.css'
import './App.css';

import Nav from "./components/nav/nav";

import routes from './routes';

class App extends Component {

  render() {

    return (
      <HashRouter>
        <div>
          <Nav />
          {routes}

        </div>
      </HashRouter>
    );
  }
}

export default App;
