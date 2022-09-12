import PropTypes from 'prop-types';
import { StatsList, ListItem, Totals } from './statistics.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatsList>
        <ListItem>Good: {good}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
      </StatsList>
      <Totals>Total: {total}</Totals>
      <Totals>Positive feedback: {positivePercentage}%</Totals>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
