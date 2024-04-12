import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        35,  // fov
        1,  //aspect ratio
        0.1,  // near clip
        100,  // far clip
    );
    camera.position.set(0, 1.5, 30);
    return camera;
}
export { createCamera };