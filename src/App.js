import { useEffect, useState } from "react";
import "./App.css";
import GifImg from "./GifImg";

function App() {
  const [gifList, setGifList] = useState([]);
  const [url, setUrl] = useState("");

  const apikey = "YdRG7nj8w8JdpJHzyy1NUMm8hEiHfqPR";

  function handleSearch( keyword){
    setUrl(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apikey}`)
  }

  useEffect(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => setGifList(json.data));
  }, []);


  return (
    <div className="App">
      <button onClick={()=>handleSearch("dogs")}>Buscar Perritos</button>
      <button onClick={()=>handleSearch("cats")}>Buscar Gatitos</button>
      <button onClick={()=>handleSearch("pokemon")}>Buscar Pokemons</button>
      <h1>Gifs Coderhouse</h1>
      {gifList.map((item) => (
        <GifImg key={item.id} title={item.title} url={item.images.original.url} />
      ))}
    </div>
  );
}

export default App;
