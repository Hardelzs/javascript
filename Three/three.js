import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Ground & Pathway
const groundGeometry = new THREE.PlaneGeometry(20, 20);
const grassTexture = new THREE.TextureLoader().load('grass_texture.jpg');
const groundMaterial = new THREE.MeshStandardMaterial({ map: grassTexture });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const pathGeometry = new THREE.PlaneGeometry(4, 20);
const pathTexture = new THREE.TextureLoader().load('path_texture.jpg');
const pathMaterial = new THREE.MeshStandardMaterial({ map: pathTexture });
const path = new THREE.Mesh(pathGeometry, pathMaterial);
path.position.y = 0.01;
scene.add(path);

// Soldier Model Loader
const loader = new GLTFLoader();
let soldier;
loader.load('soldier.glb', (gltf) => {
    soldier = gltf.scene;
    soldier.scale.set(1, 1, 1);
    soldier.position.set(0, 0, 0);
    scene.add(soldier);
});

// Movement
const keys = {};
window.addEventListener('keydown', (e) => keys[e.code] = true);
window.addEventListener('keyup', (e) => keys[e.code] = false);

function animate() {
    requestAnimationFrame(animate);

    if (soldier) {
        if (keys['ArrowUp']) soldier.position.z -= 0.1;
        if (keys['ArrowDown']) soldier.position.z += 0.1;
    }

    renderer.render(scene, camera);
}

animate();
