document.addEventListener('DOMContentLoaded', function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    const geometry = new THREE.Geometry();

    for (let i = 0; i < 10000; i++) {
        const star = new THREE.Vector3(
            THREE.Math.randFloatSpread(2000),
            THREE.Math.randFloatSpread(2000),
            THREE.Math.randFloatSpread(2000)
        );
        geometry.vertices.push(star);
    }

    const material = new THREE.PointsMaterial({ color: 0x888888 });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    camera.position.z = 1;

    function animate() {
        requestAnimationFrame(animate);

        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0005;

        renderer.render(scene, camera);
    }

    animate();
});
