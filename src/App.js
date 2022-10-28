import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [isLoading, setIsLoading] = useState(true),
    [quote, setQuote] = useState(""),
    [author, setAuthor] = useState(""),
    url = "https://quotes15.p.rapidapi.com/quotes/random/";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "835dfcd2ccmsh1ef31f0f5e9fb50p19eb2cjsnd658b8d19fc1",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.log(response.statusText);
      }
      const data = await response.json();
      console.log(data);
      setQuote(data.content);
      setAuthor(data.originator.name);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <QuoteBox
          setIsLoading={setIsLoading}
          fetchData={fetchData}
          quote={quote}
          author={author}
        />
      )}

      <a
        href="https://github.com/Py-Ru"
        target="_blank"
        rel="noreferrer"
        style={{ color: "white" }}
      >
        <p className="creator">Aikou Ajanaku</p>
      </a>
    </div>
  );
}

export default App;
