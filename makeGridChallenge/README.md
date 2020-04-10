# makeGridChallenge

Your mission, should you choose to accept it:
We need to make a sudoku grid, but it needs to be client side rendered for animation purposes. Sudoku grids are a 3x3 gird, with each grid having a 3x3 grid of cells inside. To play Sudoku, the same number cannot be in the same box, column or row, so we need to be able to tell these three items by our markup.  
Tasks:
- Figure out how to make the html structure present in (grid.html)[grid.html] with JavaScript
- There will be 9 boxes. Each box needs to be marked 1 - 9
- Inside those boxes, there will be 9 cells. Each cell needs to have a data attribute for the row and column it is in
