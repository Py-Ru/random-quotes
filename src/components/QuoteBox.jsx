import NewQuote from "./NewQuote";
import Quotes from "./Quotes";

const QuoteBox = ({ isLoading, fetchData, quote, author }) => {
  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <div className="box">
        <Quotes quote={quote} author={author} isLoading={isLoading} />
        <div className="all-btn">
          <NewQuote handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default QuoteBox;
