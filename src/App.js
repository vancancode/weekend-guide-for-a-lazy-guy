import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import GithubUsers from './GithubUsers';
import Playnine from './Playnine';

library.add(faStroopwafel);
library.add(faStar);
library.add(faCheck);
library.add(faTimes);
library.add(faRetweet);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div>HELLO THERE MOTHER FUCKERS</div>
          <br />
        </header>
        <br />
        <Playnine />
        <GithubUsers/> 
      </div>
    );
  }
}

export default App;
