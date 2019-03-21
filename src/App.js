import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    counter: 0,
  };

  updateCounter(value) {
    this.setState({
      counter: this.state.counter + value,
    });
  }

  render() {
    console.log('app ', this.props);

    return (
      <div className={'App'}>
        <h1>
          Счетчик <strong>{this.state.counter}</strong>
        </h1>

        <hr />

        <div className="Actions">
          <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
          <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(App);
