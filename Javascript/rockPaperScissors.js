const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  const wins = {
    paper: "rock",
    rock: "scissors",
    scissors: "paper",
  };

  return wins[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};
