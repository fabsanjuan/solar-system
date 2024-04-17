import { createScene } from './components/scene.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createSphere } from './components/sphere.js';
import { getCurrentTexture } from '../planetPicker.js';
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
        texture = getCurrentTexture(0);
        this.sphere = createSphere(texture);
        const stars = createStars();
        loop.updateTables.push(this.sphere, stars);
        scene.add(this.sphere, stars, light);

        // How does this work?
        const resizer = new Resizer(container, camera, renderer);
    }
    updateTexture(currentPos) {
        texture = getCurrentTexture(currentPos);
        this.sphere.material.map.dispose();
        this.sphere.material.map = texture;
        this.sphere.material.needsUpdate = true;
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