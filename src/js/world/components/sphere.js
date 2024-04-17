import { SphereGeometry, Mesh, MeshStandardMaterial } from 'three';

function createSphere(texture) {
    const geometry = new SphereGeometry(5, 32, 32);
    const material = new MeshStandardMaterial({
        map: texture,
    })
    const sphere = new Mesh(geometry, material);
    sphere.position.set(0, -1, 5);

    // Set torus animation.
    sphere.tick = (delta) => {
        sphere.rotation.y += (0.2 * delta);
    }

    return sphere;   
}
export { createSphere };