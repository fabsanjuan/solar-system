import { Raycaster, Vector2 } from 'three';

function createRaycaster(e, camera) {
    const raycaster = new Raycaster();
    const mouse = new Vector2();

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    return raycaster;
}


export { createRaycaster };