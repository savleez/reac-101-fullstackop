import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  let totalVotes = good + neutral + bad;
  // Handle the case where there are no votes to avoid division by zero errors
  if (totalVotes === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  let average = ((good * 1 + neutral * 0 + bad * -1) / totalVotes) * 100;

  let positive = (good / totalVotes) * 100;

  return (
    <>
      <h1>Statistics</h1>
      <p>
        Good: {good} <br />
        Neutral: {neutral} <br />
        Bad: {bad}
      </p>
      <p>
        All: {totalVotes} <br />
        Average: {average} % <br />
        Positive: {positive} %
      </p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => setGood(good + 1);
  const onClickNeutral = () => setNeutral(neutral + 1);
  const onClickBad = () => setBad(bad + 1);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text='Good' onClick={onClickGood} />
      <Button text='Neutral' onClick={onClickNeutral} />
      <Button text='Bad' onClick={onClickBad} />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
