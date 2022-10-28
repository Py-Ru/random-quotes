import Loading from "./Loading";

const Quotes = ({ quote, author, isLoading }) => {
  return (
    <div id="quote-box">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <p id="text">{quote}</p>
          <small id="author">— {author}</small>
        </div>
      )}
    </div>
  );
};

export default Quotes;
