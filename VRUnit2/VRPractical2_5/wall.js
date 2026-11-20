class Wall {
      constructor(x,y,z, scale){
        this.scale = scale;
    this.x = x * this.scale;
    this.y = y;
    this.z = z * this.scale;
    
    this.obj = document.createElement("a-entity");
    
    this.wall = document.createElement("a-box")

    this.wall.setAttribute("color","#ffffbb");
    this.wall.setAttribute("height", 3)
    this.wall.setAttribute("width", this.scale);
    this.wall.setAttribute("depth", this.scale)
    this.wall.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.wall.setAttribute("src", "#backroomsWallpaper")
    this.wall.setAttribute("repeat", "1 2")

    this.board = document.createElement("a-box")
    this.board.setAttribute("color", "#636232");
    this.board.setAttribute("height", 0.1);
    this.board.setAttribute("width", this.scale*1.05);
    this.board.setAttribute("depth", this.scale*1.05)
    this.board.setAttribute("position",{x:this.x,y:this.y-1,z:this.z});


    this.obj.append(this.wall)
    this.obj.append(this.board)

    this.board = document.createElement("a-box")
    scene.append(this.obj);

  }
}