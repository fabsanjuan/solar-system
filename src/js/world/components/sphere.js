import { SphereGeometry, Mesh, MeshStandardMaterial } from 'three';

function createSphere(texture, glowMaterial) {
    const geometry = new SphereGeometry(5, 32, 32);
    const material = new MeshStandardMaterial({
        map: texture,
    })
    const sphere = new Mesh(geometry, material);
    sphere.position.set(0, -1, 5);

    const glowMesh = new THREE.Mesh(geometry, glowMaterial);
    glowMesh.scale.set(1.1, 1.1, 1.1);
    // earthGroup.add(glowMesh);

    // Set planet animation.
    sphere.tick = (delta) => {
        sphere.rotation.y += (0.2 * delta);
    }

    return sphere;   
}
export { createSphere };