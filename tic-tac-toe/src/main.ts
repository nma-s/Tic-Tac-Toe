import './style.scss'


// Capturing elements on the elements on the DOM
const tiles = document.querySelectorAll<HTMLDivElement>(".game__tile");
const turn = document.querySelector<HTMLDivElement>(".turn-display");
const gameboard = document.querySelector<HTMLDivElement>(".game");
const xScore = document.querySelector<HTMLDivElement>(".score__player--x");
const oScore = document.querySelector<HTMLDivElement>(".score__player--o")

const winningCombinations: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer: string = 'X';
let xScoreValue = 0;


if(!turn || !tiles || !gameboard || !xScore || !oScore){
    throw new Error (`There's an issue with one of the selectors: 
    tiles => ${tiles}, turn display => ${turn}`);
}

// set turn display 
turn.innerText = `It's Player ${currentPlayer}'s Turn`;



// function when each tile is clicked
const tileClickEvents = (event: Event) => {
  // statement management - what state si it currently in
  const currentTile = event.currentTarget as HTMLDivElement;

  // Prevent changing a tile once it contains a player
  if (currentTile.innerText !== "") return;

  // on each click display the current player on tile
  currentTile.innerText = currentPlayer;

  // check for win
  if (checkWin(currentPlayer)) {
    if(currentPlayer === 'X'){
      xScoreValue++;
      xScore.innerText = xScoreValue.toString();
    }
  }
  // check for draw

  // on each click check current player and switch
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  // on each click Update turn display on each click
  turn.innerText = `It's Player ${currentPlayer}'s turn`;
}

const checkWin = (currentPlayer: string): boolean => {
  for (let i = 0; i < winningCombinations.length){
    const [a , b , c] = winningCombinations[i];
    if(tiles[a].innerHTML === currentPlayer && 
      tiles[b].innerHTML === currentPlayer && 
      tiles[c].innerHTML === currentPlayer) {
        return true
      }
  }
  return false;
}



// Add event Listener for to add functionality to each click of 
// a. tile
tiles.forEach((tile, index) => {
    tile.addEventListener('click', tileClickEvents, { once: true });
})
