import { World } from './world/World.js';

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPos = 0;

function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);
    let name = "Mercury";
    world.start();

    prevBtn.addEventListener('click', () => {
        if (currentPos <= 0) {
            return;
        }
        currentPos--;
        // console.log(texture);

        name = world.updateTextureGlow(currentPos);
        console.log(name);
    })
    nextBtn.addEventListener('click', () => {
        if (currentPos >= 8) {
            return;
        }
        currentPos++;
        name = world.updateTextureGlow(currentPos);
        console.log(name);
    })
}
main();