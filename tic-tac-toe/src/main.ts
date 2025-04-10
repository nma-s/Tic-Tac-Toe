import './style.scss'


// Step1: Capturing elements on the elements on the DOM
const tiles = document.querySelectorAll<HTMLDivElement>(".game__tile")
const turn = document.querySelector<HTMLDivElement>(".turn-display")

let currentPlayer: string = 'X';

if(!turn || !tiles){
    throw new Error (`There's an issue with one of the selectors: 
    tiles => ${tiles}, turn display => ${turn}`);
}

//test
turn.innerText = "Player X's Turn TS";
// button.addEventListener("click, func")


// function when each tile is clicked
const tileClickEvents = (event: Event) => {
    // statement management - what state si it currently in
    const currentTile = event.currentTarget as HTMLDivElement;
    // if (currentTile.innerText !== '') return;
    // on each click display the current player
    currentTile.innerText = currentPlayer;  
    
}



// Add event Listener for to add functionality to each click of 
// a. tile
tiles.forEach((tile) => {
    tile.addEventListener('click', tileClickEvents);
})
