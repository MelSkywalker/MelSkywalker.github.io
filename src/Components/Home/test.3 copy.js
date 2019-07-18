import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gltfPath from './assets/cat2.glb';

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
        this.camera.position.z = 10;
        this.camera.position.y = 3;
        this.camera.position.x = -20;
        this.camera.rotation.y = -1;

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
    };

    //Use const for local variables and Class properties for objects that should be accesible across the Components
    addCustomSceneObjects = () => {

        this.loader = new GLTFLoader();
        this.cat = this.loader.load(gltfPath, (gltf) => {
            this.mixer = new THREE.AnimationMixer(gltf.scene);
            gltf.animations.forEach(clip => this.mixer.clipAction(clip).play());
            this.scene.add(gltf.scene);
            console.log(gltf);
            this.cat = gltf.scene.children[0];
        }, undefined, err => console.error(err));

        const lights = [];
        lights[0] = new THREE.PointLight(0xffffff, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);

        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(- 100, - 200, - 100);

        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);

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
        if(this.cat){
            this.cat.rotation.x += 0.05 * (this.target.y - this.cat.rotation.x);
            this.cat.rotation.y += 0.05 * (this.target.x - this.cat.rotation.y);
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