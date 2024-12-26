const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  )
    return "Player 1 won!";
  else {
    return "Player 2 won!";
  }
};
//1
const rps2 = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  return `Player ${
    /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  } won!`;
};

//2
rps = (a, b) =>
  a == b ? "Draw!" : `Player ${/rp|ps|sr/.test(a[0] + b[0]) ? 2 : 1} won!`;

//3
const rp3 = (p1, p2) => {
  var map = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (p1 == p2) {
    return "Draw!";
  } else {
    return "Player " + (map[p1] == p2 ? 1 : 2) + " won!";
  }
};