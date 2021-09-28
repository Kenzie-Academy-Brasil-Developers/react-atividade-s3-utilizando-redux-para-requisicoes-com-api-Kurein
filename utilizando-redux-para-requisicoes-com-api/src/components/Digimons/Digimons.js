import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  console.log(digimons);

  return (
    <div>
      <ul>
        {digimons.map((digimon, index) => {
          return (
            <li key={index}>
              <p>Nome: {digimon.name}</p>
              <img src={digimon.img} alt={digimon.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Digimons;
