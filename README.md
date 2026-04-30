# Portfolio Website

A modern, futuristic portfolio website built with React, Vite, and Tailwind CSS. Features a unique design with dark/light theme toggle, smooth animations, and responsive layout.

## 🚀 Features

- **Modern Design**: Futuristic UI with cyber-themed elements and gradients
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive**: Works perfectly on all devices
- **Single Page Application**: Smooth scrolling navigation with React Router for project details
- **Animated Elements**: Floating animations, glowing effects, and smooth transitions
- **Project Showcase**: Featured projects with detailed pages
- **Contact Integration**: mailto links for easy communication

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations (ready to implement)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update the following files with your information:

- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/About.jsx` - About section, skills, and stats
- `src/components/Education.jsx` - Education and certifications
- `src/components/Experience.jsx` - Work experience and volunteer work
- `src/components/Achievements.jsx` - Awards and achievements
- `src/components/Contact.jsx` - Contact information
- `src/components/Projects.jsx` - Your projects
- `src/components/ProjectDetail.jsx` - Detailed project information

### Images
Replace placeholder images with your own:
- Profile images in Hero and About sections
- Project screenshots
- Any other placeholder images

### Colors and Styling
The color scheme is defined in `tailwind.config.js`:
- Primary colors (blue theme)
- Accent colors (purple theme)
- Custom animations and effects

### Contact Information
Update email addresses and social links:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/Navbar.jsx`

## 📱 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Personal information, skills, and technologies
3. **Education** - Academic background and certifications
4. **Projects** - Featured and other projects with filtering
5. **Experience** - Professional experience and volunteer work
6. **Achievements** - Awards, certifications, and recognition
7. **Contact** - Contact information and quick actions
8. **Footer** - Social links and additional information

## 🎯 Project Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── Achievements.jsx
│   ├── BackgroundPattern.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProjectDetail.jsx
│   └── Projects.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for React Router (create `_redirects` file in `public` folder):
```
/*    /index.html   200
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🎨 Design Features

- **Cyber Grid Background**: Animated grid pattern
- **Floating Elements**: Animated geometric shapes
- **Gradient Effects**: Modern gradient overlays and borders
- **Glow Effects**: Neon-style glowing elements
- **Smooth Animations**: CSS animations and transitions
- **Glass Morphism**: Backdrop blur effects
- **Custom Scrollbar**: Styled scrollbar with gradients

## 📧 Contact Integration

The contact section uses `mailto:` links for easy communication:
- Quick chat requests
- Meeting scheduling
- Project inquiries
- Direct email contact

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link to `Navbar.jsx`
4. Update smooth scrolling functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

---

**Note**: This is a template portfolio. Replace all placeholder content with your actual information, projects, and images.