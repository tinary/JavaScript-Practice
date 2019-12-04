/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    // do recursion with DFS
    let dfs = (i, j, index) => {
        // if word length match with the number of index return true
        // means we have found the path of the word
        if (word.length === index) {
            return true;
        }
        // make sure the character is not out of boundary
        else if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) {
            return false;
        }
        // matching wrong character
        else if(board[i][j] !== word.charAt(index)) {
            return false;
        }
        
        // set the character to empty becuase we want to mark the character that we have already visited
        board[i][j] = '';
        
        // try all direction on the board
        let result = 
            dfs(i + 1, j, index + 1) ||    // cell down  
            dfs(i - 1, j, index + 1) ||    // cell up
            dfs(i, j + 1, index + 1) ||    // cell right
            dfs(i, j - 1, index + 1);      // cell left
        
        board[i][j] = word[index];
        
        return result;
    }
    
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word.charAt(0)) {
                if (dfs(i, j , 0)) {
                    return true;
                }
            }
        }
    }
    return false;

};