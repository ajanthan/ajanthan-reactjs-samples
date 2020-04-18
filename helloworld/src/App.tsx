import React from 'react';
import './App.css';
import Header from './header/Header';
import Counter from './counter/Counter';
interface State {
  count: number;
}

class App extends React.Component<any, State> {

  render() {
    return (
      <div>
        <Header siteName='Counter!' />
        <Counter />
      </div>
    );
  }
}

export default App;
