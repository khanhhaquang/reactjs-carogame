import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js';
import {Provider} from 'react-redux';
import store from './store.js';

//const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Game/>
      </Provider>
    );
  }
}

export default App;
