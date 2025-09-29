import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
            antialias: true
        });
        
        this.init();
    }
    
    init() {
        // Renderer setup
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.setZ(30);
        
        // Lighting
        this.setupLighting();
        
        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.setupControls();
        
        // Event listeners
        this.setupEventListeners();
    }
    
    setupLighting() {
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(pointLight, ambientLight);
    }
    
    setupControls() {
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.5;
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    
    render() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}