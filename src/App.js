import React, { Component } from 'react';
import { Header } from './components/layout/index';
import GameList from './components/gameList/game-list';

class App extends Component {
  render() {
    return (
      <section className="wrapper">
        <Header />
        <GameList />
      </section>
    );
  }
}

export default App;
