import { useEffect, useState } from "react";
import "./App.css";
import GifImg from "./GifImg";

function App() {
  const [gifList, setGifList] = useState([]);
  const [keyword, setKeyword] = useState("dogs");

  const apikey = "YdRG7nj8w8JdpJHzyy1NUMm8hEiHfqPR";

  useEffect(() => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apikey}&limit=5&offset=100`;
    fetch(url)
      .then((respuestahttp) => respuestahttp.json())
      .then((jsonData) => {
        console.log(jsonData);
        setGifList(jsonData.data);
      });
  }, [keyword]);

  function handleSearch(evt) {
    setKeyword(evt.target.value);
  }

  return (
    <div className="App">
      <input onChange={handleSearch}></input>

      <h1>Gifs Coderhouse</h1>
      {gifList.map((gif) => (
        <GifImg key={gif.id} title={gif.title} url={gif.images.downsized.url} />
      ))}
    </div>
  );
}

export default App;
