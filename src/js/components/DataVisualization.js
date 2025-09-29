import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';
import { CountUp } from 'countup.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export class DataVisualization {
    constructor() {
        this.initializeCharts();
        this.initializeCounters();
    }

    initializeCharts() {
        // Skills Radar Chart
        const skillsCtx = document.getElementById('skillsChart');
        if (skillsCtx) {
            new Chart(skillsCtx, {
                type: 'radar',
                data: {
                    labels: ['JavaScript', 'Three.js', 'WebGL', 'React', 'Node.js', 'Python'],
                    datasets: [{
                        label: 'Skills Proficiency',
                        data: [95, 85, 75, 90, 80, 85],
                        fill: true,
                        backgroundColor: 'rgba(100, 255, 218, 0.2)',
                        borderColor: 'rgb(100, 255, 218)',
                        pointBackgroundColor: 'rgb(100, 255, 218)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(100, 255, 218)'
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            angleLines: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            pointLabels: {
                                color: 'white'
                            },
                            ticks: {
                                backdropColor: 'transparent',
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#64ffda'
                        }
                    }
                }
            });
        }

        // Project Success Rate Chart
        const projectsCtx = document.getElementById('projectsChart');
        if (projectsCtx) {
            new Chart(projectsCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Completed', 'In Progress', 'Planning'],
                    datasets: [{
                        data: [85, 10, 5],
                        backgroundColor: [
                            'rgba(100, 255, 218, 0.8)',
                            'rgba(255, 214, 100, 0.8)',
                            'rgba(255, 100, 100, 0.8)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#64ffda'
                        }
                    }
                }
            });
        }
    }

    initializeCounters() {
        const options = {
            duration: 2.5,
            useEasing: true,
            useGrouping: true,
        };

        // Initialize counters for statistics
        const stats = [
            { id: 'projectsCompleted', end: 50 },
            { id: 'clientSatisfaction', end: 98 },
            { id: 'codeLines', end: 150000 },
            { id: 'contributions', end: 500 }
        ];

        stats.forEach(stat => {
            const element = document.getElementById(stat.id);
            if (element) {
                const counter = new CountUp(stat.id, 0, stat.end, 0, options);
                
                // Start counter when element is in view
                const observer = new IntersectionObserver(
                    (entries) => {
                        if (entries[0].isIntersecting) {
                            counter.start();
                            observer.unobserve(element);
                        }
                    },
                    { threshold: 0.5 }
                );
                
                observer.observe(element);
            }
        });
    }
}