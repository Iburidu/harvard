import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingMask from "./components/LoadingMask";
import Artpieces from "./components/Artpieces";
import About from "./components/About";
import Login from "./components/Login";
import Error from "./components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";

  //  Képek fetchelése az oldalra
  const [artpieces, setArtpieces] = useState([]);

  // Keresés fetchelése
  const [searchField, setSearchField] = useState([]);

  //Keresőszó state
  const[searchWord, setSearchWord] = useState('')

  const [perPage, setPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("Date asc");

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

//Keresőszó

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/image?q=${searchWord}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchField(data.records);
      }, 1000);
  }, []);

  console.log(searchField);


  useEffect(() => {
    sortBy === "asc"
      ? setArtpieces([...artpieces].sort((a, b) => (a.date < b.date ? 1 : -1)))
      : setArtpieces([...artpieces].sort((a, b) => (a.date > b.date ? 1 : -1)));
  }, [sortBy]);

  return (
    <>
      <div className='App'>
        <p style={{ color: "red" }}>
          Hogy lehet +/- gomb használatával itemet hozzáadni, elvenni?
        </p>
        <input
          type='number'
          value={perPage}
          onChange={(event) => {
            setPerPage(event.target.value);
          }}
        />
        <p>Filter: </p>
        {/* <input
        type='text'
        placeholder='filter'
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      /> */}

<p>Search: </p>
        <input
        type='text'
        placeholder='Type your search'
        value={searchWord}
        onChange={(event) => {
          setSearchWord(event.target.value);
        }}
      />

        <Button
          variant='warning'
          onClick={() => {
            sortBy === "Date asc"
              ? setSortBy("Date desc")
              : setSortBy("Date asc");
          }}
        >
          {" "}
          Sort by {sortBy}{" "}
        </Button>

        <BrowserRouter>
          <Routes>
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
