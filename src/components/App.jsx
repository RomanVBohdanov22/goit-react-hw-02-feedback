import React, { Component } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackoptions';
import Notification from './notification';
import Section from './section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, bad, neutral} = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good} = this.state; 
    return (Math.round((good / this.countTotalFeedback()) * 100))||0;
  };

  onLeaveFeedback = opt => {
    this.setState(prevState => ({
      [opt]: prevState[opt] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const totFeedBack = countTotalFeedback();
    const posPersentage = countPositiveFeedbackPercentage();
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
        <div>
          <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
          {totFeedBack ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totFeedBack}
              positivePercentage={posPersentage}
            />
          ) : (
                <>
                  <Notification message="There is no feedback"/>
                </>
            )}
          </Section>
        </div>
      </div>
    );
  }
}
