import { useEffect, useState } from "react";
import "./App.css";
import GifImg from "./GifImg";

function App() {
  const [gifList, setGifList] = useState([]);

  const keyword = "pokemon";
  const apikey = "YdRG7nj8w8JdpJHzyy1NUMm8hEiHfqPR";

  const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apikey}`;

  useEffect(() => {
    fetch(url)
      .then((respuestahttp) => respuestahttp.json())
      .then((jsonData) => {
        console.log(jsonData);
        setGifList(jsonData.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Gifs Coderhouse</h1>
      {gifList.map((gif) => (
        <GifImg key={gif.id} title={gif.title} url={gif.images.downsized.url} />
      ))}
    </div>
  );
}

export default App;
