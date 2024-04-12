import { MathUtils, BufferGeometry, Float32BufferAttribute, PointsMaterial, Points } from "three";

function createStars() {
    const starCoords = [];

    for (let i = 0; i < 4000; i++) {
        const x = MathUtils.randFloatSpread(40);
        const y = MathUtils.randFloatSpread(20);
        const z = MathUtils.randFloatSpread(10);
        starCoords.push(x, y, z);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(starCoords, 3));
    const material = new PointsMaterial({color: 'grey', size: 0.01})
    const stars = new Points(geometry, material);

    stars.tick = (delta) => {
        // stars.rotation.x += (0.01 * delta);
        // stars.rotation.y += -(0.007 * delta);
    }

    return stars;
}
export { createStars };