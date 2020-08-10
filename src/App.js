import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';

class App extends React.Component {
  render () {
    return (
      <div>
        <ClickCounter name="madhan"/>
        <HoverCounter />
      </div>
    )
  }
}

export default App;
