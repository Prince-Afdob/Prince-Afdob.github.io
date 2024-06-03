import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import {OrbitControls} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let object;
let controls;
const loader = new GLTFLoader();

loader.load(
    `../src/computer.glb`,
    function (gltf){
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr){
        console.log((xhr.loaded / xhr.total * 100) + '% loaded'); 
    },
    function (error){
        console.error(error);
    }
);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(400, 400);

document.getElementById("container3d").appendChild(renderer.domElement);
