# three-gltf-downloader

A helper function to download three.js scenes (or Object3D subtrees) to a binary glTF file.  It utilizes the THREE.GLTFExporter, and includes the browser code to actually download it to disk.

## Installation

```
$ npm install --save download-three-gltf
```

## Usage

```
const download = require("download-three-gltf")
download(scene, {filename: "MyModel.glb"})
```