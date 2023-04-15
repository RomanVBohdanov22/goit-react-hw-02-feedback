import React, { Component } from 'react';

export class App extends Component {
  /*static defaultProps = {
    step: 1,
  };*/
 /*
  constructor() { 
  super();
  this.state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
    this.handleGood = this.handleGood.bind(this);
    this.handleBad = this.handleBad.bind(this);
    this.handleNeutral = this.handleNeutral.bind(this);
  }
*/

state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  total = () => {     
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positive = () => {
    return (this.state.good / this.total())*100;
  };

  handleGood = evt => {
    /*const { target } = evt;
    console.log(`Good clicked ${evt}}`, target);
    console.log(this);*/
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral,
        bad: prevState.bad,
      }
    });
  };
  handleNeutral = evt => {
    /* const { target } = evt;
    console.log(`Neutral clicked ${evt}}`, target);
    console.log(this);*/
    this.setState(prevState => {
      return {
        good: prevState.good,
        neutral: prevState.neutral + 1,
        bad: prevState.bad,
      }
    });
  };

  handleBad = evt => {
    /*const { target } = evt;
    console.log(`Bad clicked ${evt}}`, evt.target);
    console.log(this);*/
    this.setState(prevState => {
      return {
        good: prevState.good,
        neutral: prevState.neutral,
        bad: prevState.bad + 1,
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    //const { step } = this.props;

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
        goit-react-hw-02-feedback
        <div className="Statistics">
          <div className="Feeback">
            <h2>Please leave feedback</h2>
            <button type="button" onClick={this.handleGood}>
              Good
            </button>
            <button type="button" onClick={this.handleNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleBad}>
              Bad
            </button>
          </div>
          <div className="Statistics">
            <h2>Statistics</h2>
            <span>Good: {good};</span>
            <span>Neutral: {neutral};</span>
            <span>Bad: {bad};</span>
            <span>Total: {this.total()};</span>
            <span>Positive: {this.positive()}</span>
          </div>
        </div>
      </div>
    );
  }
}
