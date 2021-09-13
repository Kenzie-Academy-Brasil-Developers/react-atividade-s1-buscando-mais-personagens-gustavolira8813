import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import CharCard from "./components/CharCard";
import Characters from "./components/Characters";
import ButtonIndex from "./components/ButtonIndex";
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);
  console.log(characterList);

  const nextPage = () => {
    if (next < 34) {
      setNext(next + 1);
    }
  };
  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} />
        <ButtonIndex
          nextPage={nextPage}
          previousPage={previousPage}
          next={next}
          setNext={setNext}
        />
      </header>
    </div>
  );
}

export default App;
