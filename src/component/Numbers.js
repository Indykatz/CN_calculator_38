const Numbers = ({ handleClick }) => {
  const numButtons = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "c",
    ".",
    "0",
    "=",
  ];
  return (
    <div>
      {numButtons.map((aButton) => (
        <button onClick={handleClick} key={aButton}>
          {aButton}
        </button>
      ))}
    </div>
  );
};

export default Numbers;
