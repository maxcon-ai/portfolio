import { Scene } from './core/Scene';
import { ParticleSystem } from './components/ParticleSystem';
import { AnimationLoop } from './core/AnimationLoop';
import { ScrollAnimations } from './core/ScrollAnimations';
import { DataVisualization } from './components/DataVisualization';
import { FloatingElements } from './components/FloatingElements';
import './components/AnimatedUI.js';

// Initialize scene
const scene = new Scene();

// Create components
const particleSystem = new ParticleSystem(scene.scene);
const floatingElements = new FloatingElements(scene.scene);

// Initialize animation loop with all components
const components = [particleSystem, floatingElements];
const animation = new AnimationLoop(scene, components);

// Initialize animations and effects
new ScrollAnimations();
new DataVisualization();

// Start the animation loop
animation.start();