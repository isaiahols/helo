import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";

import './reset.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>This is an App I just made!!!</h1>
        </div>
      </HashRouter>
    );
  }
}

export default App;
