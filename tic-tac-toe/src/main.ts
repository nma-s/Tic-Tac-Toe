import './style.scss'


// Step1: Capturing elements on the elements on the DOM
const tiles = document.querySelectorAll<HTMLButtonElement>(".game__tile")
const turn = document.querySelector<HTMLDivElement>(".game__turn")

if(!turn || !tiles){
throw new Error ("Do not have element")
}
turn.innerText = "Player X's Turn TS";
// button.addEventListener("click, func")
console.dir(tiles);

// function when each tile is clicked
const tileClickEvents = (event: Event)=> {
    // statement management - what state si it currently in

    const currentTile = event.currenttarget as HTMLButtonElement;
    if (currentTile.textContent !== '') return;
    // on each click display the current player
    currentTile.textContent = 'X';   
}



// Add event Listener for to add functionality to each click of 
// a. tile
tiles.forEach((tile) => {
    tile.addEventListener('click', tileClickEvents);
})
