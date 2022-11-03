import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard";

const PokeMoves = () => {
  return (
    <>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          <PokeMoveCard key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default PokeMoves;
