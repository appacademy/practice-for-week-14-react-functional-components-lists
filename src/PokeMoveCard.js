import { moves } from "./data";
import "./PokeMoveCard.css";

function PokeMoveCard(moves) {
  return (
    <li className="poke-move-card">
      <h3>Move {moves.id}</h3>
      <h4 style={{ padding: 10 }}>{moves.type.toUpperCase()}</h4>
      <p>Type: {moves.type}</p>
      <p>Level: {moves.level}</p>
    </li>
  );
}

export default PokeMoveCard;
