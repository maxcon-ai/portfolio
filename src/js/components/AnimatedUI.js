const anime = window.anime;

class AnimatedUI {
    constructor() {
        this.initializeAnimations();
    }

    initializeAnimations() {
        // Animate header text on load
        this.animateHeaderText();
        
        // Animate stats counters
        this.animateStats();
        
        // Initialize scroll animations
        this.initializeScrollAnimations();
        
        // Initialize hover animations
        this.initializeHoverAnimations();
    }

    animateHeaderText() {
        // Hero section text animation
        anime.timeline({loop: false})
            .add({
                targets: 'header h1',
                opacity: [0, 1],
                translateY: [-50, 0],
                easing: "easeOutExpo",
                duration: 1200
            })
            .add({
                targets: 'header .title',
                opacity: [0, 1],
                translateY: [-20, 0],
                easing: "easeOutExpo",
                duration: 800
            }, '-=800')
            .add({
                targets: '.metrics-overview .metric',
                opacity: [0, 1],
                scale: [0.8, 1],
                translateY: [-20, 0],
                easing: "easeOutExpo",
                duration: 1000,
                delay: anime.stagger(100)
            }, '-=400');
    }

    animateStats() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress bars
                    anime({
                        targets: entry.target.querySelector('.progress'),
                        width: [0, entry.target.querySelector('.progress').dataset.value],
                        easing: 'easeInOutQuart',
                        duration: 1200
                    });
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.progress-bar').forEach(progressBar => {
            observer.observe(progressBar);
        });
    }

    initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('project-card')) {
                        anime({
                            targets: entry.target,
                            opacity: [0, 1],
                            translateY: [50, 0],
                            easing: 'easeOutQuad',
                            duration: 600
                        });
                    } else if (entry.target.classList.contains('skill-item')) {
                        anime({
                            targets: entry.target,
                            scale: [0.8, 1],
                            opacity: [0, 1],
                            easing: 'easeOutElastic(1, .8)',
                            duration: 800
                        });
                    } else if (entry.target.classList.contains('timeline-item')) {
                        anime({
                            targets: entry.target,
                            translateX: [-50, 0],
                            opacity: [0, 1],
                            easing: 'easeOutQuad',
                            duration: 600
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.project-card, .skill-item, .timeline-item').forEach(el => {
            observer.observe(el);
        });
    }

    initializeHoverAnimations() {
        // Project cards hover effect
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                anime({
                    targets: e.target,
                    scale: 1.05,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });

            card.addEventListener('mouseleave', (e) => {
                anime({
                    targets: e.target,
                    scale: 1,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            });
        });

        // Skill tags hover animation
        document.querySelectorAll('.skill-tags span').forEach(tag => {
            tag.addEventListener('mouseenter', (e) => {
                anime({
                    targets: e.target,
                    scale: 1.1,
                    duration: 200,
                    easing: 'easeOutElastic(1, .8)'
                });
            });

            tag.addEventListener('mouseleave', (e) => {
                anime({
                    targets: e.target,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutQuad'
                });
            });
        });
    }

    // Call this method when loading new content or changing sections
    animatePageTransition() {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition';
        document.body.appendChild(overlay);

        anime.timeline()
            .add({
                targets: '.page-transition',
                scaleX: [0, 1],
                duration: 600,
                easing: 'easeInOutQuart'
            })
            .add({
                targets: '.page-transition',
                scaleX: [1, 0],
                transformOrigin: '100% 0',
                duration: 600,
                easing: 'easeInOutQuart',
                complete: () => {
                    overlay.remove();
                }
            });
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    new AnimatedUI();
});