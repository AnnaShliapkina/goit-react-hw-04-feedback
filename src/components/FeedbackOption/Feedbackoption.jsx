import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map((option, index) => (
        <Button
          type="button"
          onClick={onLeaveFeedback}
          name={option}
          key={index}
        >
          {option}
        </Button>
      ))}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
