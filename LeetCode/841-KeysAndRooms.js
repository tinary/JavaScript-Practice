/*
There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:

Input: [[1],[2],[3],[]]
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.

Example 2:

Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.
Note:

1 <= rooms.length <= 1000
0 <= rooms[i].length <= 1000
The number of keys in all rooms combined is at most 3000.
*/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let keys = rooms[0]; // the 1st room is always available for access
    let visited = [0];   // keep track of the rooms we visited
    
    while (keys.length > 0) {
        let key = keys[0];   // assign the first element from the keys's list to key
        keys.splice(0, 1);   // remove the first key in the array after using it to open the room
        let nextRoom = rooms[key];  // get the keys from the other room using the key we got from the previous room

        // we don't want to keep taking the keys from the room we already visited
        if (!visited.includes(key)) {   
            keys.push(...nextRoom);
            visited.push(key);
        }
        // console.log("key: ", key, "nextRoom: ", nextRoom, "keys:", keys, "visited: ", visited);
    }
    
    // checking the amount rooms we visted is the same amount of rooms available to us 
    if (rooms.length === visited.length) {
        return true;
    }
    else {
        return false;
    }
};