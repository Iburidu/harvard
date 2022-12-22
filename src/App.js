import "./App.css";
import { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Artpieces from "./components/Artpieces";

function App() {
  const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";

//MET fetc: random számok az objectId-hez, de nem mindegyikhez van kép!
  let min = 3000
  let max = 483163
  const objectId = Math.floor(Math.random() * (max - min) + min) + 1
  // https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}


  const [artpieces, setArtpieces] = useState([]);
  const [perPage, setPerPage] = useState(5);
  //
  useEffect(() => {
    fetch(
      ` https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setArtpieces(data.primaryImage);
          console.log(data.primaryImage);
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
<p style={{color: 'red'}}>Hogy lehet +/- gomb használatával itemet hozzáadni, elvenni?</p>
      {artpieces.length > 0 ? (
        <Artpieces artData={artpieces} />
      ) : (
        <LoadingMask />
      )}
    </div>
  );
}

export default App;
