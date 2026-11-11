class Rocket {
    constructor(x, y, z) {
        this.enitity = document.createElement("a-entity");
        this.x = x
        this.y = y
        this.z = z
        this.dy = ((Math.random()*0.3) + 0.05)
        this.enitity.setAttribute("position", {x:this.x, y:this.y, z:this.z})
        this.cone = document.createElement("a-cone")
        this.cone.setAttribute("position", "0 3.5 0")
        this.cone.setAttribute("color", "brown")
        this.enitity.append(this.cone)

        this.body = document.createElement("a-cylinder");
        this.body.setAttribute("color", "red")
        this.body.setAttribute("height", "3")
        this.body.setAttribute("position", "0 1.5 0")
        this.enitity.append(this.body);

        this.jetfuel = document.createElement("a-cone");
        this.jetfuel.setAttribute("color", "orange");
        this.jetfuel.setAttribute("opacity", "0.5")
        this.jetfuel.setAttribute("rotation", "0 0 180")
        this.jetfuel.setAttribute("scale", "0.5 2 0.5")
        this.jetfuel.setAttribute("position", "0 -2 0")
        this.enitity.append(this.jetfuel)

        this.jetcone = document.createElement("a-cone");
        this.jetcone.setAttribute("color", "brown");
        this.jetcone.setAttribute("rotation", "0 0 0")
        this.jetcone.setAttribute("scale", "0.7 2 0.7")
        this.jetcone.setAttribute("position", "0 -0.5 0")
        this.enitity.append(this.jetcone)

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