const Total = ({ parts }) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {parts.reduce((accumulator, part) => {
          return accumulator + part.exercises;
        }, 0)}
      </p>
    </>
  );
};

export default Total;
