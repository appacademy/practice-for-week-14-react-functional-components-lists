import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          <li>
            <PokeMoveCard key={item.id} {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
