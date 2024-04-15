// Function that handles planet switching.
// document.addEventListener('DOMContentLoaded',

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
let currentPos = 0;
let currentPlanet;

//Function to create textures here.

nextBtn.addEventListener('click', () => {
    if (currentPos >= planets.length - 1) {
        return;
    }
    // TODO: get current texture and dispose it.
    currentPos++;
    // TODO: select the planet and texture here.
    currentPlanet = planetPicker();
    // console.log(currentPos, currentPlanet);
})
prevBtn.addEventListener('click', () => {
    if (currentPos <= 0) {
        return;
    }
    currentPos--;
    currentPlanet = planetPicker();
    // console.log(currentPos, currentPlanet);
})

function planetPicker() {
    let planet = planets[currentPos];
    return planet;
}

function getCurrentPlanet() {
    return currentPlanet;
}

export { getCurrentPlanet };
