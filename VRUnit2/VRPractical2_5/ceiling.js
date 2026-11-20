
class Ceiling {
      constructor(x,y,z, scale, id){
          this.scale = scale;
    this.x = x * this.scale;
    this.y = y;
    this.z = z * this.scale;
    


    this.obj = document.createElement("a-entity");
    this.bigtile = document.createElement("a-box")
    this.bigtile.setAttribute("color","#7c7742");
    this.bigtile.setAttribute("height", 0.05)
    this.bigtile.setAttribute("width", this.scale);
    this.bigtile.setAttribute("depth", this.scale);

    this.smalltile = document.createElement("a-box")
    this.smalltile.setAttribute("color","#f3e8b4");
    if (id % 9 == 0){
      this.smalltile.setAttribute("color","#f9f9f7");
      this.smalltile.setAttribute("shader", "flat")
      this.light = document.createElement("a-light");
      this.light.setAttribute("intensity", "1")
      this.light.setAttribute("position",{x:0, y:-0.2, z:0});
      
      this.light.setAttribute("type", "point")
      //this.obj.append(this.light)
    } else {
      this.smalltile.setAttribute("src", "#tile")

    }
    this.smalltile.setAttribute("height", 0.1)
    this.smalltile.setAttribute("width", this.scale*0.95);
    this.smalltile.setAttribute("depth", this.scale*0.95);

    this.obj.append(this.bigtile)
    this.obj.append(this.smalltile)

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);

  }
}