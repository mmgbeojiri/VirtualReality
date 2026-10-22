window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  let scene = document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron> and create it.
  let dodeca = document.createElement("a-dodecahedron");

  
  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color
  dodeca.setAttribute("position", "0 4 -5");
  dodeca.setAttribute("rotation", "45 45 45");
  dodeca.setAttribute("radius", "2")
  dodeca.setAttribute("color", "brown")


  //Challenge 4: Add the <a-dodecahedron> to the scene
  scene.append(dodeca);

  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  */

  for (let i = 0; i < 100; i++) {
    let dodeca = document.createElement("a-dodecahedron");
    dodeca.setAttribute("position", `${(Math.random()-0.5)*100} ${(Math.random()-0.5)*100} ${(Math.random()-0.5)*100}`)
    dodeca.setAttribute("color", `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`)
    scene.append(dodeca);
  }
  
})