import { WebGLRenderer } from 'three';

function createRenderer() {
    const renderer = new WebGLRenderer({antialias: true});
    // Turn on physically correct lighting model.
    renderer.physicallyCorrectLights = true;

    return renderer;
}
export {createRenderer};