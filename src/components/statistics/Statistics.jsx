import PropTypes from 'prop-types';
import '../statistics/Statistics.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage}) => {
  return (
        <div className="statistics">

            <p><span>Good:</span> {good}</p>
            <p><span>Neutral:</span> {neutral}</p>
            <p><span>Bad:</span> {bad}</p>
            <p><span>Total:</span> {total}</p>
            <p><span>Positive:</span> {positivePercentage}%</p>
          </div>
  );
};

export default Statistics;

Statistics.propTypes= {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};