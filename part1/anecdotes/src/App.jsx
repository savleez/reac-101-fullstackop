import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const getRamdomValue = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const getRandomAnecdote = (currentIndex) => {
    let randomIndex = currentIndex;

    while (randomIndex === currentIndex) {
      randomIndex = getRamdomValue();
    }

    return randomIndex;
  };

  const handleRandomAnecdote = () => {
    let newSelected = getRandomAnecdote(selected);
    setSelected(newSelected);
  };

  const handleVote = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  let mostVoted = votes.indexOf(Math.max(...votes));

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} <br />
      </p>
      <Button onClick={handleRandomAnecdote} text='Random Anecdote!' /> <br />
      <Button onClick={handleVote} text='Vote for this anecdote' /> <br />
      <p>
        This anecdote has {votes[selected]}{' '}
        {votes[selected] != 1 ? 'votes' : 'vote'}
      </p>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdotes[mostVoted]} <br /> It has {votes[mostVoted]} votes
      </p>
    </>
  );
};

export default App;
