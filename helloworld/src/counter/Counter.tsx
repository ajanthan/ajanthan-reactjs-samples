import React from 'react';
import './Counter.css';

interface State {
  count: number;
}

class Counter extends React.Component<any, State> {

  constructor(props: any) {
    super(props)
    this.state = { count: 0 }
    this.onclickIncrease = this.onclickIncrease.bind(this)
    this.onclickDecrease = this.onclickDecrease.bind(this)
  }

  onclickIncrease() {
    this.setState({ count: this.state.count + 1 })
  }

  onclickDecrease() {
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 })
  }

  render() {
    return (
      <div>
        <div className="counter-container-wrapper">
          <div className="counter-container">
            <div className="label-group">
              <label>count: {this.state.count}</label>
              <div className="button-group">
                <button type='button' onClick={this.onclickIncrease}>+</button>
                <button type='button' onClick={this.onclickDecrease}>-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Counter;
