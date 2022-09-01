let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (hmn, com, sec) => {
  const humanDifference = Math.abs(com - hmn);
  const comDifference = Math.abs(sec - com);

  return humanDifference <= comDifference ? true : false;
};

const updateScore = (winner) => {
  winner === "human" ? humanScore++ : computerScore++;
};

const advanceRound = () => currentRoundNumber++;
