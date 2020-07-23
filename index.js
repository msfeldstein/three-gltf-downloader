/**
 * Downloads a binary glTF file representing the THREE.Scene
 * @param {THREE.Scene} scene
 * @param {object} options
 * @param {string} options.filename Filename to download the glb as
 */
const downloadGltf = async (scene, options = {}) => {
	return new Promise((resolve, reject) => {
		if (!global.THREE) global.THREE = require("three");
		require("three/examples/js/exporters/GLTFExporter");
		const exporter = new THREE.GLTFExporter();
		exporter.parse(
			scene,
			(gltf) => {
				const blob = new Blob([gltf], { type: "text/plain" });
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				document.body.appendChild(a);
				a.download = options.filename || "download.glb";
				a.click();
				resolve();
			},
			{
				binary: true,
			}
		);
	});
};

module.exports = downloadGltf;
