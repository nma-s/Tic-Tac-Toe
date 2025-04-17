# Tic Tac Toe 

A simple browser-based Tic Tac Toe game built using TypeScript, HTML, and SCSS. The project was a fun way to practice my front-end development skills.

Players take turns marking the grid with X and O. The goal is to get three of the same symbol in a row either vertically, horizontally, or diagonally.

Play it here: 

## Project breakdown

### HTML

-    Grid
    -    3 columns, 3 rows
    -    Using grid positions
    -    Each cell will contain a button
-    Divs
    -    box (1 to 9) => 9 btns
    -    Total needed 9 div
-    Display(s) 
    -  Two displays
        -  one to show whose turn it is (TOP)
        -  one to show the the score for each player (BOTTOM)
        
### SCSS
-   Grid lines 
-   Strike through winning combonation

### TS Logic

-   eventListeners that will need to listen for clicks
    -   when pressing a box div it should add the player icon (X/O) to the box
        - we should not be allowed to have more than one player select the same box 
        (`CF`)
        -   generate a random move for Player 2
    -   winning case: (`CF`)
            -  1. Horizontally {[1, 2, 3], [4 ,5, 6], [7, 8, 9]}
            -  2. Vertically {[1, 4, 7], [2, 5, 8], [3, 6, 9]}
            -  3. Diagonally {[1, 5, 9], [3, 5, 7]}
            -  when a player wins we need to add a banner to display the winner of that round and clear gameboard 
            -  when a player wins it should be added to the scores counter 
    -   when pressing Restart we want to clear the gameboard and the scoresboard and resetting the game
    

