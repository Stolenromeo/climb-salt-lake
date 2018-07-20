import React, { Component } from 'react';
import './App.css';

import Changes from './Components/ChangeReqs'
import Button from './Components/Button'
import Climbs from './Components/Climbs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Climb Salt Lake</h1>
        </header>
        <div className='mainSec'>
          <div className='mainLeft'>
            <Climbs />
          </div>
          <div className="mainRight">
            <div className="rightTop">rightTop</div>
            <div className="rightBottom">rightBottom</div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
