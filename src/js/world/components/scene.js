import {Scene, Color} from 'three';

function createScene() {
    const scene = new Scene();
    scene.background = new Color('#21282a');
    return scene;
}
export {createScene};