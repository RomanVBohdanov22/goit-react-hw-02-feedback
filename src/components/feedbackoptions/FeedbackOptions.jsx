import PropTypes from 'prop-types';
import '../feedbackoptions/FeedbackOptions.css';

//FeedbackOptions

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div className="feedback">        
        {
            options.map((option) => {
    return (
      <button type="button" name="option" key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ); })
        }
    </div>);
};

export default FeedbackOptions;


FeedbackOptions.propTypes= { 
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

