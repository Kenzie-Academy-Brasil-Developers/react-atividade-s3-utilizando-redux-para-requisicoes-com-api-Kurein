import axios from "axios";

import { addDigimon } from "./actions";

const addDigimonsThunk = (digimonName, setError) => (dispatch) => {
  axios.get("https://digimon-api.vercel.app/api/digimon").then((response) => {
    const digimon = response.data.find((elt) => elt.name === digimonName);
    if (digimon) {
      dispatch(addDigimon(digimon));
    }
  });
};

export default addDigimonsThunk;
