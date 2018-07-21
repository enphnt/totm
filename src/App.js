import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import GameView from './Components/GameView';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <GameView />

        <Footer />
      </div>
    );
  }
}

export default App;
