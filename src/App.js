import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import GifImg from "./GifImg";

function App() {
  const [gifs, setGifs] = useState([]);

  const apikey = ""; /* insertar su api de Giphy luego de registrarse */
  let keyword = "dogs";
  const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apikey}`;

  /*  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((json) => setGifs(json.data)); */

  function handleSearch(event) {
    event.preventDefault();
    let keyword = event.target.children[0].value; /* el input */
    const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apikey}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => setGifs(json.data));
  }

  return (
    <div className="App">
      <h1>Gifs Coderhouse</h1>
      <form onSubmit={handleSearch}>
        <input id="searchText"></input>
        <button>Buscar</button>
      </form>
      {gifs.map((item) => (
        <GifImg title={item.title} url={item.images.original.url} />
      ))}
    </div>
  );
}

export default App;
