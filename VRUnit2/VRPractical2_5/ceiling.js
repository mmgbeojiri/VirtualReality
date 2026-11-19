
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
    this.smalltile.setAttribute("color","#6b6134");
    if (id % 5 == 0){
      this.smalltile.setAttribute("color","#f9f9f7");
    }
    this.smalltile.setAttribute("height", 0.1)
    this.smalltile.setAttribute("width", this.scale*0.9);
    this.smalltile.setAttribute("depth", this.scale*0.9);

    this.obj.append(this.bigtile)
    this.obj.append(this.smalltile)

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);

  }
}