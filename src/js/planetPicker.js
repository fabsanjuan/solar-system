import { TextureLoader, ShaderMaterial, AdditiveBlending, BackSide } from 'three';

//Fresnel glsl imports for planet atmospheres.
import mercuryVertexShader from '../../src/assets/shaders/mercuryVertexShader.glsl';
import mercuryFragmentShader from '../../src/assets/shaders/mercuryFragmentShader.glsl';
import venusVertexShader from '../../src/assets/shaders/venusVertexShader.glsl';
import venusFragmentShader from '../../src/assets/shaders/venusFragmentShader.glsl';
import earthVertexShader from '../../src/assets/shaders/earthVertexShader.glsl';
import earthFragmentShader from '../../src/assets/shaders/earthFragmentShader.glsl';
import marsVertexShader from '../../src/assets/shaders/marsVertexShader.glsl';
import marsFragmentShader from '../../src/assets/shaders/marsFragmentShader.glsl';
import jupiterVertexShader from '../../src/assets/shaders/jupiterVertexShader.glsl';
import jupiterFragmentShader from '../../src/assets/shaders/jupiterFragmentShader.glsl';
import saturnVertexShader from '../../src/assets/shaders/saturnVertexShader.glsl';
import saturnFragmentShader from '../../src/assets/shaders/saturnFragmentShader.glsl';
import uranusVertexShader from '../../src/assets/shaders/uranusVertexShader.glsl';
import uranusFragmentShader from '../../src/assets/shaders/uranusFragmentShader.glsl';
import neptuneVertexShader from '../../src/assets/shaders/neptuneVertexShader.glsl';
import neptuneFragmentShader from '../../src/assets/shaders/neptuneFragmentShader.glsl';
import plutoVertexShader from '../../src/assets/shaders/plutoVertexShader.glsl';
import plutoFragmentShader from '../../src/assets/shaders/plutoFragmentShader.glsl';


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
            texturePath = './textures/mercuryMap.jpg';
            vertexShader = mercuryVertexShader;
            fragmentShader = mercuryFragmentShader;
            break;
        case "Venus":
            texturePath = './textures/venusMap.jpg';
            vertexShader = venusVertexShader;
            fragmentShader = venusFragmentShader;
            break;
        case "Earth":
            texturePath = './textures/earthMap.jpg';
            vertexShader = earthVertexShader;
            fragmentShader = earthFragmentShader;
            break;
        case "Mars":
            texturePath = './textures/marsMap.jpg';
            vertexShader = marsVertexShader;
            fragmentShader = marsFragmentShader;
            break;
        case "Jupiter":
            texturePath = './textures/jupiterMap.jpg';
            vertexShader = jupiterVertexShader;
            fragmentShader = jupiterFragmentShader;
            break;
        case "Saturn":
            texturePath = './textures/saturnMap.jpg';
            vertexShader = saturnVertexShader;
            fragmentShader = saturnFragmentShader;
            break;
        case "Uranus":
            texturePath = './textures/uranusMap.jpg';
            vertexShader = uranusVertexShader;
            fragmentShader = uranusFragmentShader;
            break;
        case "Neptune":
            texturePath = './textures/neptuneMap.jpg';
            vertexShader = neptuneVertexShader;
            fragmentShader = neptuneFragmentShader;
            break;
        case "Pluto":
            texturePath = './textures/plutoMap.jpg';
            vertexShader = plutoVertexShader;
            fragmentShader = plutoFragmentShader;
            break;
        default:
            texturePath = './textures/'; // default case
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
