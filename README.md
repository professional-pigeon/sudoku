What do we need to do

Create an application that checks if a completed Sudoku puzzle is “legal.” In other words, it should ensure the following rules are met:

Each row contains all numbers from 1 to 9 with no repeats.
Each column contains all numbers from 1 to 9 with no repeats.
Further Exploration: Each of the nine 3 x 3 grids contain all numbers from 1 to 9 with no repeats.

Focus on the business logic and make sure to test the logic thoroughly before implementing any user interface logic.

sequence of 9 numbers, a row, a column, or a square, but it's always a sequence of 9 numbers

- We make two test arrays: a pass array and a fail array
- We need to create a function that tests whether 9 numbers are distinct.



UI: we need to create an array of the 9 numbers we need (column, row, square)
