let scene;
let mechTemplate;
let mechList = []
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mechTemplate = document.getElementById("mech-1");
  
  for (let i = -50; i < 50; i+=10) {
    for (let j = -50; j < 50; j+=10) {
      mechList.push(new Mech(i, 13, j))
    
  }
  }

  loop();
})
function loop(){

  for (let mech of mechList) {
    mech.flip()
  }

  window.requestAnimationFrame( loop );
}
