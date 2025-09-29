import anime from 'animejs';

export class AnimationEffects {
    constructor() {
        this.initializeAnimations();
        this.setupEventListeners();
    }

    initializeAnimations() {
        // Animate header text
        this.animateHeaderText();
        
        // Animate metrics
        this.animateMetrics();
        
        // Create floating shapes
        this.createFloatingShapes();
        
        // Initialize page transition
        this.initializePageTransition();
    }

    animateHeaderText() {
        // Split text animation for header
        const textWrapper = document.querySelector('.header-text');
        if (textWrapper) {
            textWrapper.innerHTML = textWrapper.textContent.replace(
                /\S/g,
                "<span class='letter'>$&</span>"
            );

            anime.timeline()
                .add({
                    targets: '.header-text .letter',
                    translateY: [-100, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 1400,
                    delay: (el, i) => 300 + 30 * i
                });
        }
    }

    animateMetrics() {
        anime({
            targets: '.metric',
            scale: [0.5, 1],
            opacity: [0, 1],
            delay: anime.stagger(150),
            duration: 1500,
            easing: 'cubicBezier(.5, .05, .1, .3)'
        });
    }

    createFloatingShapes() {
        const shapes = document.querySelectorAll('.floating-shape');
        shapes.forEach(shape => {
            const randomX = anime.random(-20, 20);
            const randomY = anime.random(-20, 20);
            const randomDuration = anime.random(3000, 5000);

            anime({
                targets: shape,
                translateX: randomX,
                translateY: randomY,
                rotate: 360,
                duration: randomDuration,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine'
            });
        });
    }

    initializePageTransition() {
        const transition = document.createElement('div');
        transition.className = 'page-transition';
        document.body.appendChild(transition);

        anime({
            targets: '.page-transition',
            scaleX: [1, 0],
            duration: 1200,
            easing: 'easeInOutExpo'
        });
    }

    setupEventListeners() {
        // Project card hover animation
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    scale: 1.05,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });

            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    scale: 1,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });

        // Skill progress bar animation
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target.querySelector('.progress'),
                        width: entry.target.querySelector('.progress').getAttribute('data-value'),
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5
        });

        document.querySelectorAll('.progress-bar').forEach(bar => {
            observer.observe(bar);
        });
    }

    // Scroll-triggered animations
    animateOnScroll(element, animation) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animation(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        observer.observe(element);
    }

    // Timeline animation
    animateTimeline() {
        anime.timeline({
            targets: '.timeline-item',
            delay: anime.stagger(200),
            opacity: [0, 1],
            translateY: [50, 0],
            easing: 'easeOutQuad',
            duration: 800
        });
    }
}