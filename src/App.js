import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingMask from "./components/LoadingMask";
import Artpieces from "./components/Artpieces";
import About from "./components/About";
import Login from "./components/Login";
import Error from "./components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(parPage) {
  const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";
  const [artpieces, setArtpieces] = useState([]);
  const [perPage, setPerPage] = useState(10);
  // const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(
      `https://api.harvardartmuseums.org/image?apikey=${apiKey}&size=${perPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setArtpieces(data.records);
        }, 1000);
      });
  }, [perPage]);

  console.log(artpieces);

  return (
    <>
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
        <BrowserRouter>
          <Routes>
            {/* <p>Filter: </p>
      <input
        type='text'
        placeholder='filter'
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      /> */}

            <Route
              path='/'
              element={
                artpieces.length > 0 ? (
                  <Artpieces artData={artpieces} />
                ) : (
                  <LoadingMask />
                )
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
