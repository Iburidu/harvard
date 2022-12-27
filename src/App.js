import "./App.css";
import { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Artpieces from "./components/Artpieces";
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";
  const [artpieces, setArtpieces] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(
      `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=${perPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setArtpieces(data.records);
          console.log(data.records);
        }, 1000);
      });
  }, [perPage]);

  return (
    <div className='App'>
      <input
        type='number'
        value={perPage}
        onChange={(event) => {
          setPerPage(event.target.value);
        }}
      />

      <p style={{ color: "red" }}>
        Hogy lehet +/- gomb használatával itemet hozzáadni, elvenni?
      </p>

      {/* <p>Filter: </p>
      <input
        type='text'
        placeholder='filter'
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      /> */}

      {artpieces.length > 0 ? (
        <Artpieces artData={artpieces} />
      ) : (
        <LoadingMask />
      )}
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
