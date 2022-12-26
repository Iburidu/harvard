import "./App.css";
import { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Artpieces from "./components/Artpieces";

function App() {
  const [artpieces, setArtpieces] = useState([]);
  // const [setPage, setPerPage] = useState(5);
  //
  useEffect(() => {
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setArtpieces(data);
          console.log(data);
        });
      });
  }, []);

  return (
    <div className='App'>
      {/* <input
        type='number'
        value={setPage}
        onChange={(event) => {
          setPerPage(event.target.value);
        }}
      /> */}
      {/* <p style={{color: 'red'}}>Hogy lehet +/- gomb használatával itemet hozzáadni, elvenni?</p> */}
      {artpieces.length > 0 ? (
        <Artpieces artData={artpieces} />
      ) : (
        <LoadingMask />
      )}
    </div>
  );
}

export default App;
