import PropTypes from 'prop-types';
import { Message } from './notification.styled';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
