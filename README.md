# Modern Three.js & Anime.js Portfolio

An immersive, interactive portfolio website built with Three.js, Anime.js, and modern web technologies.

## 🌟 Features

- Interactive 3D background with particle system and floating elements
- Smooth animations and transitions powered by Anime.js
- Dynamic data visualizations with Chart.js
- Responsive design with modern CSS
- Component-based architecture
- Performance optimized with Vite

## 🏗️ Architecture

The project follows a modern, modular architecture:

```
src/
├── assets/
│   └── images/        # Project images and resources
├── css/
│   ├── style.css      # Main styles
│   └── animations.css # Animation-specific styles
├── js/
│   ├── components/
│   │   ├── AnimatedUI.js        # Anime.js animations
│   │   ├── DataVisualization.js # Charts and statistics
│   │   ├── FloatingElements.js  # 3D floating shapes
│   │   └── ParticleSystem.js    # Background particles
│   ├── core/
│   │   ├── Scene.js           # Three.js scene setup
│   │   ├── AnimationLoop.js   # Main animation loop
│   │   └── ScrollAnimations.js # Scroll-based animations
│   └── main.js                # Application entry point
└── index.html                 # Main HTML file
```

## 🎨 Animations & Effects

### Three.js Features
- Particle system background
- Interactive floating 3D shapes
- Dynamic lighting effects
- Responsive 3D scene
- Camera controls and interactions

### Anime.js Animations
- Text reveal animations
- Scroll-triggered effects
- Interactive hover states
- Page transitions
- Progress bar animations
- Counter animations
- Staggered list reveals

### Data Visualizations
- Skill radar charts
- Project statistics
- Interactive timelines
- Animated progress bars
- Real-time counters

## 🚀 Technology Stack

- **Three.js**: 3D graphics and animations
- **Anime.js**: UI animations and transitions
- **Chart.js**: Data visualization
- **Vite**: Build tool and development server
- **ESLint**: Code linting
- **Prettier**: Code formatting

## 💻 Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maxcon-ai/portfolio/
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## 📦 Build & Deployment

The project uses Vite for optimized builds:

1. Generate production build:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

## 🔄 CI/CD Pipeline

GitHub Actions workflow automates:

- Code linting
- Building
- Testing (when tests are added)
- Deployment to GitHub Pages

## 🎯 Components Overview

### AnimatedUI.js
Handles all Anime.js animations including:
- Page transitions
- Text animations
- Scroll effects
- Hover interactions

### DataVisualization.js
Manages data visualization including:
- Skill charts
- Project statistics
- Performance metrics
- Interactive timelines

### FloatingElements.js
Controls 3D floating elements:
- Geometric shapes
- Movement patterns
- Interactive behaviors
- Visual effects

### ParticleSystem.js
Manages the background particle system:
- Particle generation
- Movement patterns
- Color transitions
- Interactive responses

## 📱 Responsive Design

The portfolio is fully responsive across all devices:
- Desktop optimized 3D effects
- Tablet-friendly layouts
- Mobile-responsive design
- Touch-enabled interactions

## ⚡ Performance Optimization

- Efficient 3D rendering
- Optimized animation frames
- Lazy-loaded components
- Minified assets
- Compressed textures
- Code splitting

## 🔧 Customization

### Modifying Animations
1. Edit timing in `AnimatedUI.js`
2. Adjust easing functions
3. Modify animation properties
4. Add new animation sequences

### Updating Content
1. Modify `index.html` for content changes
2. Update project images in `assets/images`
3. Adjust statistics in `DataVisualization.js`
4. Modify styles in CSS files

### Three.js Scene
1. Adjust camera settings in `Scene.js`
2. Modify particle properties
3. Add new 3D elements
4. Update lighting and effects

## 🔄 CI/CD Pipeline

Automated deployment workflow:
1. Code linting
2. Build process
3. Performance testing
4. Deployment to hosting

## 📝 License

MIT

---

Made with ❤️ and Three.js
