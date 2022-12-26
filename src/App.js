import "./App.css";
import { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Artpieces from "./components/Artpieces";

function App() {
  
//MET fetc: random számok az objectId-hez, de nem mindegyikhez van kép!
  let min = 3000
  let max = 483163
  const objectId = Math.floor(Math.random() * (max - min) + min) + 1
  


  const [artpieces, setArtpieces] = useState([]);
  // const [setPage, setPerPage] = useState(5);
  //
  useEffect(() => {
    fetch(
      ` https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
    )
      .then((res) => res.json())
      .then((data) => {
//képek kiválasztása a fetch-en keresztül visszatérő objektumból

        if (data.primaryImage !== '') {
          setTimeout(() => {
            setArtpieces(data);
            console.log(data);
          }, 1000);
        } else {
          setArtpieces()
          console.log('No image added to the Object');
        }
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
