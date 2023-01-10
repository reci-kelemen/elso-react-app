import { useState } from 'react';
import './App.css';

function App() {
  const [bejegyzesek, setBejegyzesek] = useState([]);
  const [feladat, setFeladat] = useState("");
  const isValid = feladat!== "";
  
  const bejegyzesHozzaadasa = () => {
    const bejegyzes = {
      feladat: feladat
    };
    const ujBejegyzesek = [];
    bejegyzesek.forEach(bejegyzes => ujBejegyzesek.push(bejegyzes))
    ujBejegyzesek.push(bejegyzes);
    setBejegyzesek(ujBejegyzesek);
    const isAlreadyInList = lista.includes(bejegyzes);
    setFeladat("");
  };

  const lista = [];
  bejegyzesek.forEach(bejegyzes => {
    lista.push(
      <li><input type="checkbox"/>{bejegyzes.feladat}</li>
    )
  });

  const figyelmeztetesUres = () => {
    alert("Nem töltötte ki a mezőt!");
  };

  const figyelmeztetesMarLetezo = () => {
    alert("A feladat már rajta van a listán!");
  };

  return (
    <div>
      <h1>Teendők</h1>
      <section>
        <h2>Feladat hozzáadása</h2>
        <div>
          <p>Feladat:</p>
          <input type="text" placeholder='Feladat' value={feladat} onInput={(e) => {setFeladat(e.target.value);}}/>
        </div>
        <button onClick={() => isValid ? (bejegyzesHozzaadasa()) : (figyelmeztetesUres())}>Hozzáad</button>
      </section>

      <section>
        {
          /* To Do bejegyzések megjeleítése */
        }
        <h2>Teendők</h2>
        <div>
          <ul>{lista}</ul>
        </div>
      </section>
      

      
    </div>
  );
}

export default App;
