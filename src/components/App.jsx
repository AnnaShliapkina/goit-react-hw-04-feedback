import React from 'react';
import { useState } from 'react';
import { Section } from './Section/section';
import { Notification } from './Notification/notification';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOption/Feedbackoption';

// import { Main } from './app.styled';

export const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedbackState;

  const handleAddFeedback = event => {
    const name = event.currentTarget.name;
    setFeedbackState(state => ({ ...state, [name]: state[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = total => {
    if (total === 0) {
      return 0;
    }
    const percentage = (good * 100) / total;

    return Math.round(percentage);
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(total);

  return (
    <div>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedbackState)}
          onLeaveFeedback={handleAddFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
