import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Give Feedback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <br />
      <h1>Statistics</h1>
      <p>
        Good: {good} <br />
        Neutral: {neutral} <br />
        Bad: {bad}
      </p>
    </>
  );
};

export default App;
