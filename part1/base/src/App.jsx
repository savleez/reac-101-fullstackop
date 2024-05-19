import { useState } from 'react';

const ClickHistory = ({ allClicks }) => {
  let message =
    allClicks.length === 0
      ? 'The app is used by pressing the buttons'
      : `Button press history: ${allClicks.join(' ')}`;

  return <div>{message}</div>;
};

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Button = (props) => {
  console.log(props);
  const { onClick, text } = props;

  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);

  const updateTotalClicks = (left, rigth) => setTotalClicks(left + rigth);

  const handleLeftClick = () => {
    let newLeft = left + 1;
    setAllClicks(allClicks.concat('L'));
    setLeft(newLeft);
    updateTotalClicks(newLeft, right);
  };

  const handleRightClick = () => {
    let newRight = right + 1;
    setAllClicks(allClicks.concat('R'));
    setRight(newRight);
    updateTotalClicks(left, newRight);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <ClickHistory allClicks={allClicks} />
      <p>Total clicks: {totalClicks}</p>
    </div>
  );
};

export default App;
