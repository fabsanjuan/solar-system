import { Clock } from 'three';

const clock = new Clock;

class Loop {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.updateTables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();  // update every animated object forward by a tick / frame.
            this.renderer.render(this.scene, this.camera);
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    // Call the tick method on all objects place in the animation table.
    tick() {
        const delta = clock.getDelta();
        for (const object of this.updateTables) {
            object.tick(delta);
        }
    }
}
export { Loop };