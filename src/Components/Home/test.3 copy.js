import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gltfPath from './assets/Parrot.glb';

//Use three.js inside container
export default class ThreeScene extends Component {

    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();

        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.requestID);
        window.removeEventListener('resize', this.handleWindowResize);
    }

    sceneSetup = () => {
        //get conainter dimensions
        const width = window.innerWidth;
        const height = window.innerHeight;
        const fieldOfView = 75;
        const aspectRatio = width / height;
        const nearPlane = 1;
        const farPlane = 100;

        this.scene = new THREE.Scene();
        this.clock = new THREE.Clock();

        this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        this.camera.position.z = 85;

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
    };

    //Use const for local variables and Class properties for objects that should be accesible across the Components
    addCustomSceneObjects = () => {
        this.loader = new GLTFLoader();
        this.parrot = this.loader.load(gltfPath, (gltf) => {
            this.mixer = new THREE.AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => this.mixer.clipAction(clip).play());
            this.scene.add(gltf.scene);
            console.log(gltf);
            this.parrot = gltf.scene.children[0];
        }, undefined, err => console.error(err));

        const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 5);
        const mainLight = new THREE.DirectionalLight(0xffffff, 5);
        mainLight.position.set(10,10,10);

        this.scene.add(ambientLight, mainLight);

        this.target = new THREE.Vector2();
    };

    startAnimationLoop = () => {
        this.target.x = (this.props.mouseX) * 0.003;

        //This line makes the camera rotate in the Y axis
        // this.target.y = (this.props.mouseY) * 0.001;

        this.renderer.render(this.scene, this.camera);
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
        var delta = this.clock.getDelta();
        if(this.mixer) {
            this.mixer.update(delta);
        }
        if(this.parrot){
            this.parrot.rotation.x += 0.05 * (this.target.y - this.parrot.rotation.x);
            this.parrot.rotation.y += 0.05 * (this.target.x - this.parrot.rotation.y);
        }
    };


    handleWindowResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)}
            style={{ position: 'relative', zIndex: '-5'}}
            />
        )
    }
}