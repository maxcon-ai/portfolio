export class FloatingElements {
    constructor(scene) {
        this.scene = scene;
        this.shapes = [];
        this.createShapes();
    }

    createShapes() {
        const colors = ['#64ffda', '#9cffeb', '#41c7ff'];
        const positions = [
            { x: -20, y: 10, z: -10 },
            { x: 15, y: -5, z: -15 },
            { x: -10, y: -15, z: -5 },
            { x: 20, y: 15, z: -20 }
        ];

        positions.forEach((pos, index) => {
            const shape = this.createRandomShape(colors[index % colors.length]);
            shape.position.set(pos.x, pos.y, pos.z);
            this.shapes.push(shape);
            this.scene.add(shape);
        });
    }

    createRandomShape(color) {
        const geometries = [
            new THREE.IcosahedronGeometry(1, 0),
            new THREE.TetrahedronGeometry(1, 0),
            new THREE.OctahedronGeometry(1, 0)
        ];

        const material = new THREE.MeshPhongMaterial({
            color: color,
            transparent: true,
            opacity: 0.8,
            flatShading: true
        });

        return new THREE.Mesh(
            geometries[Math.floor(Math.random() * geometries.length)],
            material
        );
    }

    animate() {
        this.shapes.forEach((shape, index) => {
            shape.rotation.x += 0.01;
            shape.rotation.y += 0.01;
            shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        });
    }
}