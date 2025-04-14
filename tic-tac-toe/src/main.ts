import './style.scss'


// Step1: Capturing elements on the elements on the DOM
const tiles = document.querySelectorAll<HTMLDivElement>(".game__tile")
const turn = document.querySelector<HTMLDivElement>(".turn-display")

let currentPlayer: string = 'X';

if(!turn || !tiles){
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


  //check for win
  // check for draw
  //switch turns

  // on each click - check current player and switch. Update turn display on each click
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  };
  turn.innerText = `It's Player ${currentPlayer}'s turn`;
}



// Add event Listener for to add functionality to each click of 
// a. tile
tiles.forEach((tile) => {
    tile.addEventListener('click', tileClickEvents, { once: true });
})
