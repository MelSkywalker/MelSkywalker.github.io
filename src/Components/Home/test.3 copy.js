import React, { Component } from 'react';
import * as THREE from 'three';
import ColladaLoader from 'three-collada-loader';
// import { OrbitControls } from '@workswithweb/threejs-orbit-controls';

//Use three.js inside container
export default class ThreeScene extends Component {

    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();

        // window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.requestID);
        window.removeEventListener('resize', this.handleWindowResize);
        // this.controls.dispose();
    }

    sceneSetup = () => {
        //get conainter dimensions
        // const width = this.mount.clientWidth;
        // const height = this.mount.clientHeight;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const fieldOfView = 75;
        const aspectRatio = width / height;
        const nearPlane = 0.1;
        const farPlane = 1000;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        this.camera.position.z = 5;
        // this.controls = new OrbitControls( this.camera, this.mount );

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
    };

    //Use const for local variables and Class forproperties for objects that should be accesible across the Components
    addCustomSceneObjects = () => {
        const loader = new ColladaLoader();
        loader.load('./assets/catanim2.dae', function (collada) {
            const gem = collada.
        })

        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial({
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        });
        //cube is not local because it might be animated later
        this.cube = new THREE.Mesh(geometry, material);
        // this.cube.position.x = 1.5;
        this.scene.add(this.cube);

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

        // this.mouse = new THREE.Vector2();
        this.target = new THREE.Vector2();
        // this.windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    };

    startAnimationLoop = () => {
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;

        this.target.x = (this.props.mouseX) * 0.003;
        // this.target.x = (this.mouse.x) * 0.003;

        //This line makes the camera rotate in the Y axis
        this.target.y = (this.props.mouseY) * 0.003;
        // this.target.y = (this.mouse.y) * 0.003;

        this.cube.rotation.x += 0.05 * (this.target.y - this.cube.rotation.x);
        this.cube.rotation.y += 0.05 * (this.target.x - this.cube.rotation.y);

        this.renderer.render(this.scene, this.camera);
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        // const width = this.mount.clientWidth;
        // const height = this.mount.clientHeight;
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    // handleMouseMove = (e) => {
    //     console.log('on mouse move');
    //     //this.mouse.x = (e.clientX - this.windowHalf.x);
    //     this.mouse.x = this.props.mouseX;
    //     //this.mouse.y = (e.clientY - this.windowHalf.x);
    //     this.mouse.y = this.props.mouseY;
    // }

    render() {
        return (
            <div ref={ref => (this.mount = ref)}
            // onMouseMove = { this.props.handleMouseMove }
            // style= {{ position: 'absolute' }}
            style={{ position: 'relative', zIndex: '-5'}}
            />
        )
    }
}