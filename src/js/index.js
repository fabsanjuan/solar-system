import { World } from './world/World.js';

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPos = 0;

function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);
    world.start();

    prevBtn.addEventListener('click', () => {
        if (currentPos <= 0) {
            return;
        }
        currentPos--;
        // console.log(texture);
        world.updateTexture(currentPos);
        console.log(currentPos);
    })
    nextBtn.addEventListener('click', () => {
        if (currentPos >= 8) {
            return;
        }
        currentPos++;
        world.updateTexture(currentPos);
    })
}
main();