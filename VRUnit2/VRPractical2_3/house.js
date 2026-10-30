class House{
    constructor(x, y, z) {
        this.house = document.createElement("a-entity");
        this.house.setAttribute("position", {x:x, y:2, z:z})

        let box = document.createElement("a-box");
        box.setAttribute("width", 5)
        box.setAttribute("height", 5)
        box.setAttribute("depth", 4)
        box.setAttribute("color","red")
        this.house.append(box)

        let cylinder = document.createElement("a-cylinder");
        cylinder.setAttribute("segments-radial", 3)
        cylinder.setAttribute("color", "brown")
        cylinder.setAttribute("position", {x:0, y:3, z:0})
        cylinder.setAttribute("radius", 2.5)
        cylinder.setAttribute("rotation", "270 0 0")
        cylinder.setAttribute("scale", "1.25 5 0.5")
        this.house.append(cylinder)
        document.querySelector("a-scene").append(this.house)
    }
}