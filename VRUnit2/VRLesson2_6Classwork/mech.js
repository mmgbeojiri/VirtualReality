class Mech {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotation = 0;
        this.rdx = -5;
        this.timer = 0;
        this.obj = mechTemplate.cloneNode(true)
        this.obj.setAttribute("position", `${x} ${y} ${z}`)
        scene.append(this.obj)
    }

    flip() {
        this.rotation += this.rdx;
        this.timer += 1
        this.obj.setAttribute("rotation", `${this.rotation} 0 0`);
        this.obj.setAttribute("position", `${this.x} ${this.y + 5*Math.abs(Math.sin((360/this.rdx)*this.timer))} ${this.z}`)
    }
}