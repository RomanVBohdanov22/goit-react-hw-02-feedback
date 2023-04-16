import PropTypes from 'prop-types';
import '../notification/Notification.css';

const Notification = ({ message }) => {
  return <p className="notification">{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
