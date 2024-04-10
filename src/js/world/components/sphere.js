import { SphereGeometry, PointsMaterial, Points } from 'three';

function createSphere() {
    const geometry = new SphereGeometry(4, 32, 32);
    const material = new PointsMaterial({color: 'blue', size: 0.5});
    const sphere = new Points(geometry, material);
    sphere.position.set(0, 0, 0);

    // Set torus animation.
    sphere.tick = (delta) => {
        sphere.rotation.y += (0.2 * delta);
    }

    return sphere;   
}
export { createSphere };