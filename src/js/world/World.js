import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createSphere } from './components/sphere.js';
import { getCurrentTexture, getCurrentPlanet } from '../planetPicker.js';
import { createStars } from './components/stars.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';


// private variable implementation.
let scene;
let camera;
let renderer;
let loop;
let texture;
let planetName;

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
        //planetsGroup = new Group()
        texture = getCurrentTexture(0);
        //glowMaterial = getCurrentTexture[1];
        this.sphere = createSphere(texture);
        const stars = createStars();
        loop.updateTables.push(this.sphere, stars);
        //scene.add(planetGroup);
        //planetGroup.add(this.sphere, glowMaterial);

        scene.add(this.sphere, stars, light);

        // How does this work?
        const resizer = new Resizer(container, camera, renderer);
    }
    updateTexture(currentPos) {
        texture = getCurrentTexture(currentPos);
        // Get current mesh and dispose old
        this.sphere.material.map.dispose();
        this.sphere.material.map = texture;
        // add new mesh.
        this.sphere.material.needsUpdate = true;
    }
    updatePlanetName(currentPos) {
        planetName = getCurrentPlanet(currentPos);
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