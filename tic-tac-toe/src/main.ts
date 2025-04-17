import './style.scss'


// Capturing elements on the elements on the DOM
const tiles = document.querySelectorAll<HTMLDivElement>(".game__tile");
const turn = document.querySelector<HTMLDivElement>(".turn-display");
const gameboard = document.querySelector<HTMLDivElement>(".game");
const xScore = document.querySelector<HTMLDivElement>(".score__player--x");
const oScore = document.querySelector<HTMLDivElement>(".score__player--o");
const btn = document.querySelector<HTMLButtonElement>("button")

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
let oScoreValue = 0;
let roundsPlayed = 0;


if(!turn || !tiles || !gameboard || !xScore || !oScore || !btn){
    throw new Error (`There's an issue with one of the selectors: 
    tiles => ${tiles}, turn display => ${turn}`);
}

// set turn display 
turn.innerText = `It's Player ${currentPlayer}'s Turn`;



// function when each tile is clicked
const tileClickEvents = (event: Event) => {
  const currentTile = event.currentTarget as HTMLDivElement;

  // Prevent changing a tile once it contains a player
  if (currentTile.innerText !== "") return;

  // on each click display the current player on tile
  currentTile.innerText = currentPlayer;

  // check for win
    if (checkWin(currentPlayer)) {
      if (currentPlayer === "X") {
        xScoreValue++;
        xScore.innerText = `Player X = ${xScoreValue.toString()}`;

        tiles.forEach((tile) => {
          tile.innerText = "";
        });
      } else {
        oScoreValue++;
        oScore.innerText = `Player O = ${oScoreValue.toString()}`;
      }
      setTimeout(() => {
        resetBoard();
      }, 2000);

      return;
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
  for (let i = 0; i < winningCombinations.length; i++){
    const [a , b , c] = winningCombinations[i];
    if(tiles[a].innerText === currentPlayer && 
      tiles[b].innerText === currentPlayer && 
      tiles[c].innerText === currentPlayer) {
        return true
      }
  }
  return false;
}

const resetBoard = () => {
  tiles.forEach((tile) => {
    tile.innerText = "";
    tile.removeEventListener('click', tileClickEvents);
    tile.addEventListener('click', tileClickEvents);
  });
}

const restartGame = () => {
    tiles.forEach(tile => {
      tile.innerText = "";
    });
    oScore.innerText = `Player O = 0`;
    xScore.innerText = `Player X = 0`;
};


// Add event Listener for to add functionality to each click of 
// a. tile
tiles.forEach((tile, index) => {
    tile.addEventListener('click', tileClickEvents, { once: true });
})
// b. restart button
 btn.addEventListener('click', restartGame);
