import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createPlanet } from './components/sphere.js';
import { getCurrentPlanet } from '../planetPicker.js';
import { createStars } from './components/stars.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';


//Scene variables.
let scene;
let camera;
let renderer;
let loop;
//Planet variables.
let planetInfo;
let planetName;
let texture;
let glowMaterial;
let planetGroup;

class World {
    constructor(container) {
        // Scene
        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();
        loop = new Loop(scene, camera, renderer);
        container.append(renderer.domElement);
        const light = createLights();

        // Objects
        planetInfo = getCurrentPlanet(0);
        planetName = planetInfo.planet;
        texture = planetInfo.texture;
        glowMaterial = planetInfo.glowMaterial;
        this.planetGroup = createPlanet(texture, glowMaterial);
        const stars = createStars();
        loop.updateTables.push(this.planetGroup, stars);
        scene.add(this.planetGroup, stars, light);

        // How does this work?
        const resizer = new Resizer(container, camera, renderer);
    }
    updateTextureGlow(currentPos) {
        planetInfo = getCurrentPlanet(currentPos);
        planetName = planetInfo.planet;
        texture = planetInfo.texture;
        glowMaterial = planetInfo.glowMaterial;
        
        const mainSphere = this.planetGroup.children[0];
        const glowMesh = this.planetGroup.children[1];

        mainSphere.material.map.dispose();
        mainSphere.material.map = texture;
        mainSphere.material.needsUpdate = true;

        glowMesh.material = glowMaterial;
        glowMesh.material.needsUpdate = true;

        return planetName;
    }
    render() {
        renderer.render(scene, camera);
    }
    start() {
        loop.start();
    }
    stop() {
        loop.stop();
    }
}

export { World };