let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for (let i = 0; i < 20; i++) {

    createCloud(rnd(-50,50), rnd(15,20), rnd(-50, 50))
  }
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.

  for (let i = 0; i < 5; i++) {

    createHouse(rnd(-20,20), rnd(-20, 20))
  }
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

function createCloud(x, y, z) {
  let cloud = document.createElement("a-entity");
  cloud.setAttribute("position", {x:x, y:y, z:z})
  let radius = 2;
  for (let i = 0; i < 3; i++) {
    let sphere = document.createElement("a-sphere")
    sphere.setAttribute("position", {x: (Math.random()-0.5)*radius,y: (Math.random()-0.5)*radius,z: (Math.random()-0.5)*radius})
    sphere.setAttribute("radius", radius);
    sphere.setAttribute("opacity", 0.7);
    cloud.append(sphere);
  }
  document.querySelector("a-scene").append(cloud)
}

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, z) {
  let house = document.createElement("a-entity");
  house.setAttribute("position", {x:x, y:2, z:z})
  
  let box = document.createElement("a-box");
  box.setAttribute("width", 5)
  box.setAttribute("height", 5)
  box.setAttribute("depth", 4)
  box.setAttribute("color","red")
  house.append(box)

  let cylinder = document.createElement("a-cylinder");
  cylinder.setAttribute("segments-radial", 3)
  cylinder.setAttribute("color", "brown")
  cylinder.setAttribute("position", {x:0, y:3, z:0})
  cylinder.setAttribute("radius", 2.5)
  cylinder.setAttribute("rotation", "270 0 0")
  cylinder.setAttribute("scale", "1.25 5 0.5")
  house.append(cylinder)
  document.querySelector("a-scene").append(house)
}

function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



