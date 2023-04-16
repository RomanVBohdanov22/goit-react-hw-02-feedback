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
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    if (
      this.state.good === 0 &&
      this.state.bad === 0 &&
      this.state.neutral === 0
    )
      return 0;
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = opt => {
    this.setState(prevState => ({
      [opt]: prevState[opt] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
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
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
          {good || bad || neutral ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
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
