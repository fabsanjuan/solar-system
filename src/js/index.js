import { World } from './world/World.js';

function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);
    world.start();
}
main();