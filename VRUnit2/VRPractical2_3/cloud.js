class Cloud {
    constructor(x, y, z) {
        this.cloud = document.createElement("a-entity");
        this.cloud.setAttribute("position", {x:x, y:y, z:z})
        let radius = 2;
        for (let i = 0; i < 3; i++) {
          let sphere = document.createElement("a-sphere")
          sphere.setAttribute("position", {x: (Math.random()-0.5)*radius,y: (Math.random()-0.5)*radius,z: (Math.random()-0.5)*radius})
          sphere.setAttribute("radius", radius);
          sphere.setAttribute("opacity", 0.7);
          this.cloud.append(sphere);
        }
        document.querySelector("a-scene").append(this.cloud)
    }
}