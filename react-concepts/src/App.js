import React, { useState, useEffect } from 'react';
import './App.css';

// import api key -- check if worked
// create components -- create wireframe to see what is necessary
// set api data to be used in components
// put components into the App.js (here)
// style components


function App() {
  const [data, setData] = useState([]);
  const[character, setCharacter] = useState(null);


  useEffect(() => {
    fetch('https://rickandmortyapi.com/api')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  return (
    <div className="App">
      <h1>Conceptual space to demo functionality of React</h1>
      {/*}
      <div>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      )}
      </div>
      */}
    </div>
  );
}

export default App;
