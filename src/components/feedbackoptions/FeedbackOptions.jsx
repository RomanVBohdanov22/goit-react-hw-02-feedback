import PropTypes from 'prop-types';
import '../feedbackoptions/FeedbackOptions.css';

//FeedbackOptions

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div className="feedback">
        <h2>Please leave feedback</h2>
        {
            options.map((option) => {
    return (
      <button type="button" name="option" key={option} onClick={() => onLeaveFeedback(`${option}`)}>
        {option}
      </button>
    ); })
        }
    </div>);
};

export default FeedbackOptions;


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
/*
<div className="feedback">
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
*/