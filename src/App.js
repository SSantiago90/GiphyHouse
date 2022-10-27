import { useEffect, useState } from "react";
import "./App.css";
import GifImg from "./GifImg";

function App() {
  const [gifList, setGifList] = useState([]);

  const keyword = "pokemon";
  const apikey = "YdRG7nj8w8JdpJHzyy1NUMm8hEiHfqPR";
  const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apikey}`;

  const apiFetch = async () => {
    const response = await  fetch(url);
    const json = await response.json();
    setGifList(json.data)
  }

  useEffect( () => {
    apiFetch();     
  }, []);

  return (
    <div className="App">
      <h1>Gifs Coderhouse</h1>
      {gifList.map((item) => (
        <GifImg
          key={item.id}
          title={item.title}
          url={item.images.original.url}
        />
      ))}
    </div>
  );
}

export default App;
