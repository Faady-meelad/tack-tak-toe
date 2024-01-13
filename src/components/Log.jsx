export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turns) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {" "}
          {turns.player} selected{turn.square.row},{trun.square.col}
        </li>
      ))}
    </ol>
  );
}
