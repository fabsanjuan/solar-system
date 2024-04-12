import { SphereGeometry, Mesh, MeshStandardMaterial, TextureLoader } from 'three';

let planet = 'Mercury';

function createMaterial(planet) {
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
    const material = new MeshStandardMaterial({
        map: texture,
    })
    return material;
}

function createSphere() {
    const geometry = new SphereGeometry(5, 32, 32);
    const material = createMaterial(planet);
    const sphere = new Mesh(geometry, material);
    sphere.position.set(0, -1, 5);

    // Set torus animation.
    sphere.tick = (delta) => {
        sphere.rotation.y += (0.2 * delta);
    }

    return sphere;   
}
export { createSphere };