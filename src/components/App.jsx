import React, { Component } from 'react';

export class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = evt => {
    this.setState({
      /*inputValue: evt.target.value }*/
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { step } = this.props;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 28,
          gap: '18px',
          color: '#010101',
        }}
      >
        {' '}
        goit-react-hw-02-feedback
        <div className="Statistics">
          <div className="Feeback">
            <h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleGood}>
              Good 
            </button>
            <button type="button" onClick={this.handleBad}>
              Neutral
            </button>
            <button type="button" onClick={this.handleNeutral}>
              Bad
            </button>
          </div>
          <div className="Statistics">
            <h2>Statistics</h2>
            <span>Good: {this.state.good} ;</span>
            <span>Neutral: {this.state.neutral} ;</span>
            <span>Bad: {this.state.neutral} ;</span>
          </div>
        </div>
      </div>
    );
  }
}
