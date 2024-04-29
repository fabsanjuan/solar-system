import { World } from './world/World.js';
// import { onMouseHover } from './world/systems/raycaster.js';

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

    // window.addEventListener('mousemove', world.onMouseMove);

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

//TODO: Fix the z index of the star array. 