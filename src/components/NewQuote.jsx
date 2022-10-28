const NewQuote = ({ handleClick }) => {
  return (
    <div className="buttons">
      <button onClick={handleClick} className="btn new-quote">
        New Quote
      </button>
    </div>
  );
};

export default NewQuote;
