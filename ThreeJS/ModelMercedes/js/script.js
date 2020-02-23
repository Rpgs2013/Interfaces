let scene, camera, renderer, controls;

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;
    
    hlight = new THREE.AmbientLight(0x404040, 1);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    hemisphere = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.1);
    scene.add(hemisphere);

    light = new THREE.PointLight(0xc4c4c4, 2);
    light.position.set(0, 300, 500);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4, 2);
    light2.position.set(500, 100, 0);
    scene.add(light2);
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('models/mercedes/scene.gltf', function(gltf) {
        car = gltf.scene.children[0];
        car.scale.set(20, 20, 20);
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    })

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set( 0, 20, 100 );
    controls.update();
}

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

function onWindowRisize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowRisize, false);

init();
animate();