import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function handleSearch() {
    setError(false);
    dispatch(addDigimonsThunk(input));
    setInput("");
  }

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search;
