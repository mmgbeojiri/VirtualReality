/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "---x------x---x------------------x",
  "x--x---x----x---x--xxxxxx---xx---x",
  "x--x---xxxxxxxxxx------x----x----x",
  "x--x---x---x--x-x---x-------x----x",
  "x------x---x----x------x----x----x",
  "xxxx---x---xxx---------xx-xxxx---x",
  "x--xxxxxx-xx-xxx-----x--x----x-x-x",
  "x--x------xx------x-----x----x-x-x",
  "x--xxxxxx-xx--xx--x--x--x----xxx-x",
  "x--------------x--x-xxx-x--------x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;
let scale = 2;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let y = 0; y < maze.length; y++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
   let row = maze[y];

   for (let x = 0; x < row.length; x++) {
    new Carpet(x, 0, y, scale);
    new Ceiling(x, 3, y, scale, (y*row.length + x))
    if (row[x] == "x") {
      new Wall(x, 1.5, y, scale);
    }
   }
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

})