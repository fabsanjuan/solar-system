import { TextureLoader } from 'three';
// Function that handles planet switching.
// document.addEventListener('DOMContentLoaded',
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

//Function to create textures here.
function createTexture(planet) {
    const textureLoader = new TextureLoader();
    let texturePath;
    
    switch (planet) {
        case "Mercury":
            texturePath = '/solar-system/src/assets/textures/mercuryMap.jpg';
            break;
        case "Venus":
            texturePath = '/solar-system/src/assets/textures/venusMap.jpg';
            break;
        case "Earth":
            texturePath = '/solar-system/src/assets/textures/earthMap.jpg';
            break;
        case "Mars":
            texturePath = '/solar-system/src/assets/textures/marsMap.jpg';
            break;
        case "Jupiter":
            texturePath = '/solar-system/src/assets/textures/jupiterMap.jpg';
            break;
        case "Saturn":
            texturePath = '/solar-system/src/assets/textures/saturnMap.jpg';
            break;
        case "Uranus":
            texturePath = '/solar-system/src/assets/textures/uranusMap.jpg';
            break;
        case "Neptune":
            texturePath = '/solar-system/src/assets/textures/neptuneMap.jpg';
            break;
        case "Pluto":
            texturePath = '/solar-system/src/assets/textures/plutoMap.jpg';
            break;
        default:
            texturePath = '/solar-system/src/assets/textures/'; // default case
            break;
    }
    const texture = textureLoader.load(texturePath);
    return texture;
}

function getCurrentTexture(currentPos) {
    let planet = planets[currentPos];
    let texture = createTexture(planet);
    return texture;
}

export { getCurrentTexture };
