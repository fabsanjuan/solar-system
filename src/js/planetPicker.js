import { TextureLoader, ShaderMaterial, AdditiveBlending, BackSide } from 'three';

//Fresnel glsl imports for planet atmospheres.
import mercuryVertexShader from '/solar-system/src/assets/shaders/mercuryVertexShader.glsl';
import mercuryFragmentShader from '/solar-system/src/assets/shaders/mercuryFragmentShader.glsl';
import venusVertexShader from '/solar-system/src/assets/shaders/venusVertexShader.glsl';
import venusFragmentShader from '/solar-system/src/assets/shaders/venusFragmentShader.glsl';
import earthVertexShader from '/solar-system/src/assets/shaders/earthVertexShader.glsl';
import earthFragmentShader from '/solar-system/src/assets/shaders/earthFragmentShader.glsl';
import marsVertexShader from '/solar-system/src/assets/shaders/marsVertexShader.glsl';
import marsFragmentShader from '/solar-system/src/assets/shaders/marsFragmentShader.glsl';
import jupiterVertexShader from '/solar-system/src/assets/shaders/jupiterVertexShader.glsl';
import jupiterFragmentShader from '/solar-system/src/assets/shaders/jupiterFragmentShader.glsl';
import saturnVertexShader from '/solar-system/src/assets/shaders/saturnVertexShader.glsl';
import saturnFragmentShader from '/solar-system/src/assets/shaders/saturnFragmentShader.glsl';
import uranusVertexShader from '/solar-system/src/assets/shaders/uranusVertexShader.glsl';
import uranusFragmentShader from '/solar-system/src/assets/shaders/uranusFragmentShader.glsl';
import neptuneVertexShader from '/solar-system/src/assets/shaders/neptuneVertexShader.glsl';
import neptuneFragmentShader from '/solar-system/src/assets/shaders/neptuneFragmentShader.glsl';
import plutoVertexShader from '/solar-system/src/assets/shaders/plutoVertexShader.glsl';
import plutoFragmentShader from '/solar-system/src/assets/shaders/plutoFragmentShader.glsl';


// Function that handles planet switching.
// document.addEventListener('DOMContentLoaded',
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

//Returns an object with texture, glow of each planet. 
function createTextureGlow(planet) {
    //For textures.
    const textureLoader = new TextureLoader();
    let texturePath;
    //For glow.
    let vertexShader;
    let fragmentShader;
    
    //Select paths for texture & glow.
    switch (planet) {
        case "Mercury":
            texturePath = '/solar-system/src/assets/textures/mercuryMap.jpg';
            vertexShader = mercuryVertexShader;
            fragmentShader = mercuryFragmentShader;
            break;
        case "Venus":
            texturePath = '/solar-system/src/assets/textures/venusMap.jpg';
            vertexShader = venusVertexShader;
            fragmentShader = venusFragmentShader;
            break;
        case "Earth":
            texturePath = '/solar-system/src/assets/textures/earthMap.jpg';
            vertexShader = earthVertexShader;
            fragmentShader = earthFragmentShader;
            break;
        case "Mars":
            texturePath = '/solar-system/src/assets/textures/marsMap.jpg';
            vertexShader = marsVertexShader;
            fragmentShader = marsFragmentShader;
            break;
        case "Jupiter":
            texturePath = '/solar-system/src/assets/textures/jupiterMap.jpg';
            vertexShader = jupiterVertexShader;
            fragmentShader = jupiterFragmentShader;
            break;
        case "Saturn":
            texturePath = '/solar-system/src/assets/textures/saturnMap.jpg';
            vertexShader = saturnVertexShader;
            fragmentShader = saturnFragmentShader;
            break;
        case "Uranus":
            texturePath = '/solar-system/src/assets/textures/uranusMap.jpg';
            vertexShader = uranusVertexShader;
            fragmentShader = uranusFragmentShader;
            break;
        case "Neptune":
            texturePath = '/solar-system/src/assets/textures/neptuneMap.jpg';
            vertexShader = neptuneVertexShader;
            fragmentShader = neptuneFragmentShader;
            break;
        case "Pluto":
            texturePath = '/solar-system/src/assets/textures/plutoMap.jpg';
            vertexShader = plutoVertexShader;
            fragmentShader = plutoFragmentShader;
            break;
        default:
            texturePath = '/solar-system/src/assets/textures/'; // default case
            break;
    }
    //return texture,glow.
    const texture = textureLoader.load(texturePath);
    const glow = [vertexShader, fragmentShader];    
    return [texture, glow];
}

// return the planet name, texture, glow object.
function getCurrentPlanet(currentPos) {
    //Name.
    const planet = planets[currentPos];
    //Holds texture,glow array.
    const materials = createTextureGlow(planet);
    //texture.
    const texture = materials[0];
    //glow.
    const glow = materials[1];
    const vertexShader = glow[0];
    const fragmentShader = glow[1];
    const glowMaterial = new ShaderMaterial({
        vertexShader,
        fragmentShader,
        blending: AdditiveBlending,
        side: BackSide,
    })

    return { planet, texture, glowMaterial };
}

export { getCurrentPlanet };
