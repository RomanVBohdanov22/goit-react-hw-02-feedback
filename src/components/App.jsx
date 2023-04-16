import React, { Component } from 'react';
import Statistics from './statistics';

export class App extends Component {

state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  countTotalFeedback = () => {     
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    if ((this.state.good===0) && (this.state.bad===0) && (this.state.neutral===0)) return 0;
    return (this.state.good / this.countTotalFeedback())*100;
  };

  handleGood = evt => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    });
  };
  handleNeutral = evt => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    });
  };

  handleBad = evt => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage} = this;
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
        <div>
          <div className="feeback">
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

          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
        </div>
      </div>
    );
  }
}
//<FeedbackOptions options={} onLeaveFeedback={}>.