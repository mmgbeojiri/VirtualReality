class UFO {
    constructor(x, y, z) {
        this.enitity = document.createElement("a-entity");
        this.x = x
        this.y = y
        this.z = z
        this.dy = -1*(Math.random())
        this.enitity.setAttribute("position", {x:this.x, y:this.y, z:this.z})
       
        this.circle = document.createElement("a-sphere");
        this.circle.setAttribute("color", "green");
        this.enitity.append(this.circle)

        this.base = document.createElement("a-sphere");
        this.base.setAttribute("scale", "2 0.1 2")
        this.base.setAttribute("position", "0 -0.8 0");
        this.enitity.append(this.base)

        this.enitity.setAttribute("dynamic-body", "shape:box")

        document.querySelector("a-scene").append(this.enitity)
    }

    launch() {
        this.y += this.dy;
        this.enitity.setAttribute("position", {x:this.x, y:this.y, z:this.z})
    }
      //    <a-cone color="brown" position="0 3.5 0"></a-cone>
      //    <a-cylinder color="red" height="3" position="0 1.5 0"></a-cylinder>
      //  <a-cone color="orange" opacity="0.5" rotation="0 0 180" scale="0.5 2 0.5"  position="0 -1 0"></a-cone>

}