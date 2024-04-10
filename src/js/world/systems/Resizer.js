const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / container.clientHeight;  // Set camera aspect ratio.
    camera.updateProjectionMatrix();  // Updates the camera frustum.
    renderer.setSize(container.clientWidth, container.clientHeight);  // Set canvas width and height.
    renderer.setPixelRatio(window.devicePixelRatio);  // Set pixel ratio for mobile devices.
};

class Resizer {
    constructor(container, camera, renderer) {
        // Set initial size on load
        setSize(container, camera, renderer);

        window.addEventListener("resize", () => {
            setSize(container, camera, renderer);
            this.onResize();
        })
    }

    // empty method that can be customized outside of resizer class.
    onResize() {}
}

export { Resizer };