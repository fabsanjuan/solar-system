import { SphereGeometry, Mesh, MeshStandardMaterial, Group } from 'three';

//returns planet group with 2 meshes.
function createPlanet(texture, glowMaterial) {
    const geometry = new SphereGeometry(5, 32, 32);

    //Standard material mesh.
    const material = new MeshStandardMaterial({ map: texture });
    const sphere = new Mesh(geometry, material);

    sphere.position.set(0, -1, 0);

    //fresnel mesh.
    const glowMesh = new Mesh(geometry, glowMaterial);
    glowMesh.scale.set(1.1, 1.1, 1.1);
    glowMesh.position.set(0, -1, 0);
    
    //Group meshes.
    const planetGroup = new Group();
    planetGroup.add(sphere);
    planetGroup.add(glowMesh);

    // Set planet animation.
    planetGroup.tick = (delta) => {
        planetGroup.rotation.y += (0.2 * delta);
    }

    return planetGroup;   
}
export { createPlanet };