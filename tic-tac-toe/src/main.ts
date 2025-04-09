import './style.scss'


// Step1: Capturing elements on the elements on the DOM
const tile = document.querySelectorAll<HTMLButtonElement>(".game__tile")
const turn = document.querySelector<HTMLDivElement>(".game__turn")

if(!turn){
throw new Error ("Do not have turn element")
}
turn.innerText = "Player X's Turn TS";
// button.addEventListener("click, func")