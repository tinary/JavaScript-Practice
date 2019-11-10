/*
You are playing a simplified Pacman game. You start at the point (0, 0), 
and your destination is (target[0], target[1]). There are several ghosts on the map, 
the i-th ghost starts at (ghosts[i][0], ghosts[i][1]).

Each turn, you and all ghosts simultaneously *may* move in one of 4 cardinal directions: 
north, east, west, or south, going from the previous point to a new point 1 unit of distance away.

You escape if and only if you can reach the target before any ghost reaches you 
(for any given moves the ghosts may take.)  If you reach any square (including the target) 
at the same time as a ghost, it doesn't count as an escape.

Return True if and only if it is possible to escape.

Example 1:
Input: 
ghosts = [[1, 0], [0, 3]]
target = [0, 1]
Output: true
Explanation: 
You can directly reach the destination (0, 1) at time 1, while the ghosts located at (1, 0) or (0, 3)
have no way to catch up with you.
Example 2:
Input: 
ghosts = [[1, 0]]
target = [2, 0]
Output: false
Explanation: 
You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.
Example 3:
Input: 
ghosts = [[2, 0]]
target = [1, 0]
Output: false
Explanation: 
The ghost can reach the target at the same time as you.
Note:

All points have coordinates with absolute value <= 10000.
The number of ghosts will not exceed 100.
*/

// How to solve it?
// Find the distance between the ghosts and the target, and the between packman to target
// This will tell us who reaches the target first

/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    // find the distance between target and the ghost
    var distance = function(x1, y1, x2, y2) {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    };

    // use destructuring assignment to assigned the array to an array of parameters
    let [target_x, target_y] = target;

    let ghostsSteps = ghosts.map(([x, y]) => distance(target_x, target_y, x, y));

    let pacManSteps = Math.abs(target_x) + Math.abs(target_y);

    for (let i = 0; i < ghostsSteps.length; i++) {
        if (ghostsSteps[i] <= pacManSteps) {
            return false;
        }
    }
    return true;
    
};

console.log(escapeGhosts([[1, 0], [0, 3]], [0, 1]));
console.log(escapeGhosts([[1, 0]], [2, 0]));
console.log(escapeGhosts([[2, 0]], [1, 0]));