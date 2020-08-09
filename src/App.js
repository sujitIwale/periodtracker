import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import PeriodTracker from './component/PeriodTracker/PeriodTracker';

class  App extends Component {
  render() {
  return (
    <div className="App">
       <Header />
       <PeriodTracker />

    </div>
  );
}
}

export default App;
