import { ADD_DIGIMONS } from "./actionTypes";

export const addDigimon = (digimon) => {
  return {
    type: ADD_DIGIMONS,
    digimon: digimon,
  };
};
