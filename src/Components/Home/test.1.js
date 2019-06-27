import React, { Component } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class ThreeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        // this.handleMouseEnter = this.handleMouseEnter.bind(this, this.props.handleMouseEnter)
        // this.handleMouseMove = this.handleMouseMove.bind(this, this.props.handleMouseMove)
        // this.handleMouseLeave = this.handleMouseLeave.bind(this, this.props.handleMouseLeave)
    }
    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        //ADD SCENE
        this.scene = new THREE.Scene();

        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
        this.camera.position.z = 4;

        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor('#000000');
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);

        document.addEventListener('mousemove', this.onDocumentMouseMove, false);

        //ADD CUBE
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: '#433F81'});
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

        this.start();
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }

    // handleMouseEnter(e) {
    //     console.log('onMouseEnter');
    // }

    // handleMouseMove(e) {
    //     console.log('onMouseMove', e.nativeEvent.clientX, e.nativeEvent.clientY);
    // }

    // handleMouseLeave(e) {
    //     console.log('onMouseLeave', e.clientX, e.clientY);
    // }

    start = () => {
        if(!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId);
    }

    animate = () => {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        return(
            <div
                style = {{width: '400px', height: '400px'}}
                ref = {(mount) => {this.mount = mount}}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            />
        )
    }
}