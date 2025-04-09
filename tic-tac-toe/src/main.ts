import './style.scss'


// Step1: Capturing elements on the elements on the DOM
const tiles = document.querySelectorAll<HTMLButtonElement>(".game__tile")
const turn = document.querySelector<HTMLDivElement>(".game__turn")

if(!turn){
throw new Error ("Do not have turn element")
}
turn.innerText = "Player X's Turn TS";
// button.addEventListener("click, func")
console.dir(tiles);

// Add event Listener for to add functionality to each click of 
// a. tile
tiles.forEach((tile) => {
    tile.addEventListener('click', function);
})

// function when each tile is clicked
const tileClickEvents = ()=> {
    // statement management - what state si it currently in

    // on each click display the current player

    
}