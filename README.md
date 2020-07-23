# three-gltf-downloader

A helper function to download three.js scenes (or Object3D subtrees) to a binary glTF file.  It utilizes the THREE.GLTFExporter, and includes the browser code to actually download it to disk.

## Installation

```
$ npm install --save download-three-gltf
```

## Usage

```
global.THREE = require("three")
const download = require("download-three-gltf")
const scene = new THREE.Scene()
... add some stuff to scene ...
download(scene, {filename: "MyModel.glb"})
```