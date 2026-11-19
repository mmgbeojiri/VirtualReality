
class Carpet {
      constructor(x,y,z, scale){
          this.scale = scale;
    this.x = x * this.scale;
    this.y = y;
    this.z = z * this.scale;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","#56521d");
    this.obj.setAttribute("height", 0.1)
        this.obj.setAttribute("width", this.scale);
    this.obj.setAttribute("depth", this.scale)
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);

  }
}