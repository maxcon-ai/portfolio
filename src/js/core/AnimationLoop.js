export class AnimationLoop {
    constructor(scene, components) {
        this.scene = scene;
        this.components = components;
        this.animate = this.animate.bind(this);
    }
    
    start() {
        this.animate();
    }
    
    animate() {
        requestAnimationFrame(this.animate);
        
        // Animate components
        this.components.forEach(component => {
            if (component.animate) {
                component.animate();
            }
        });
        
        // Render scene
        this.scene.render();
    }
}