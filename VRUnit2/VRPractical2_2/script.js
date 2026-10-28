let car; 
let pokeball;
let rocket;
let dude;
let sun;
window.addEventListener("DOMContentLoaded",function() {
    car = document.getElementById("car")
    car.x = 0
    car.dx = -0.01

    pokeball = document.getElementById("pokemonball")
    pokeball.rx = 0
    pokeball.drx = 1
    pokeball.x = 0
    pokeball.dx = Math.sin(pokeball.rx)*100
    pokeball.y = 0
    pokeball.dx = Math.sin(pokeball.rx)*100
    pokeball.z = 0
    pokeball.dz = -0.1;
    rocket = document.getElementById("rocket");
    rocket.y = 0
    rocket.dy = 0.01;

    dude = document.getElementById("dude")
    dude.scale = 1
    dude.scaledx = 0.005

    sun = document.getElementById("sun")
    sun.opacity=0
    sun.odx = 0.01

    
    repeat();
})

/* */
function repeat() {
        car.x += car.dx;
        car.setAttribute("position", `${car.x} 0 -8`);
        pokeball.dx = Math.sin(0.1*pokeball.rx)*0.1
        pokeball.dy = Math.cos(0.1*pokeball.rx)*0.1
        pokeball.rx += pokeball.drx
        pokeball.x += pokeball.dx
        pokeball.y += pokeball.dy;
        pokeball.z += pokeball.dz;
        pokeball.setAttribute("position", `${pokeball.x} ${pokeball.y+2} ${pokeball.z+2}`)
        pokeball.setAttribute("rotation", `${pokeball.rx} 0 0`)

        rocket.y += rocket.dy
        rocket.setAttribute("position", `0 ${rocket.y} 0`)

        dude.scale += dude.scaledx;
        dude.setAttribute("scale", `${dude.scale} ${dude.scale} ${dude.scale}`)

        sun.opacity += sun.odx;
        sun.setAttribute("opacity", `${sun.opacity}`)

        requestAnimationFrame(repeat)
    }

