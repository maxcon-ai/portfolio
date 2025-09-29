import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnimations {
    constructor() {
        this.initializeAnimations();
    }

    initializeAnimations() {
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach((section, i) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        // Animate project cards
        gsap.utils.toArray('.project-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: "power2.out"
            });
        });

        // Animate skill items
        gsap.utils.toArray('.skill-item').forEach((skill, i) => {
            gsap.from(skill, {
                scrollTrigger: {
                    trigger: skill,
                    start: "top bottom",
                    toggleActions: "play none none reverse"
                },
                scale: 0.5,
                opacity: 0,
                duration: 0.5,
                delay: i * 0.1,
                ease: "back.out(1.7)"
            });
        });

        // Parallax effect for background particles
        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                gsap.to("#bg", {
                    y: self.progress * -50,
                    duration: 0.5,
                    ease: "none"
                });
            }
        });
    }
}