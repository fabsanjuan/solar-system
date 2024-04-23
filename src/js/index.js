import { World } from './world/World.js';

const heading = document.getElementById('main-heading');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPos = 0;

function main() {
    const container = document.querySelector('#scene-container');
    const world = new World(container);
    let name = "Mercury";
    heading.textContent = name;
    world.start();

    prevBtn.addEventListener('click', () => {
        if (currentPos <= 0) {
            return;
        }
        currentPos--;
        name = world.updateTextureGlow(currentPos);
        heading.textContent = name;
    })
    nextBtn.addEventListener('click', () => {
        if (currentPos >= 8) {
            return;
        }
        currentPos++;
        name = world.updateTextureGlow(currentPos);
        heading.textContent = name;
    })
}
main();