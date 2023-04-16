import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackoptions';
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

  onLeaveFeedback = opt => { 
    this.setState(
      prevState => ({
        [opt]: prevState[opt] +1,
      })
    );
  };
  /*
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
  };*/

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
          <h2>Please leave feedback</h2>
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback}/>
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
        </div>
      </div>
    );
  }
}

//<FeedbackOptions  onLeaveFeedback={this.handleIncrement} options={Object.keys(this.state)}/>
//<FeedbackOptions options={} onLeaveFeedback={}>.

/*
options.map((option) => {
    return (
      <button
        type="button"
        name="option"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });
*/