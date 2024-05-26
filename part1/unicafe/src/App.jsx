import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  let totalVotes = good + neutral + bad;
  // Handle the case where there are no votes to avoid division by zero errors
  if (totalVotes === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }

  let average = ((good * 1 + neutral * 0 + bad * -1) / totalVotes) * 100;

  let positive = (good / totalVotes) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={good} />
        <StatisticLine text='Neutral' value={neutral} />
        <StatisticLine text='Bad' value={bad} />
        <StatisticLine text='All' value={totalVotes} />
        <StatisticLine text='Average' value={average} />
        <StatisticLine text='Positive' value={positive} />
      </tbody>
    </table>
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
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
