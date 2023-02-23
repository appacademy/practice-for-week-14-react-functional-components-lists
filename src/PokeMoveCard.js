import './PokeMoveCard.css'



function PokeMoveCard(props) {
    return (
         <li className='poke-move-card'>
    <h3>Move {props.id}</h3>
    <h4 style={{ padding: 10 }}>{props.move.toUpperCase()}</h4>
    <p>Type: {props.type}</p>
    <p>Level: {props.level}</p>
  </li>
    )
}

export default PokeMoveCard;