# Quick Setup Guide

## Prerequisites

Make sure you have Node.js installed on your system:
- Download from: https://nodejs.org/ (LTS version recommended)
- Verify installation: `node --version` and `npm --version`

## Getting Started

### Step 1: Navigate to Project
```bash
cd react-school-website
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- React 18
- React DOM
- Vite
- @vitejs/plugin-react

### Step 3: Start Development Server
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

## Project Features

### ✅ Reusable Components
Every section is a separate component that can be:
- Easily modified
- Reused across pages
- Updated independently

### ✅ Component Props
Components accept data through props, making it easy to customize content:

```jsx
// Example: Add more stats
const stats = [
  { number: '50+', label: 'Expert Faculty' },
  { number: '1000+', label: 'Students' },
  // Add more here
];
```

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1200px
- Touch-friendly interface

## Editing Content

### Change Hero Text
File: `src/components/Hero.jsx`
```jsx
<h1 className="hero-title">Your Custom Title</h1>
<p className="hero-subtitle">Your custom subtitle</p>
```

### Update Stats
File: `src/components/QuickStats.jsx`
```jsx
const stats = [
  { number: '50+', label: 'Expert Faculty' },
  // Modify these
];
```

### Add/Remove Facilities
File: `src/components/FacilitiesSection.jsx`
```jsx
const facilities = [
  {
    image: 'your-image-url',
    title: 'Your Title',
    description: 'Your description'
  },
  // Add more facilities
];
```

### Update Mission Values
File: `src/components/MissionSection.jsx`
```jsx
const missions = [
  {
    number: '01',
    title: 'Your Mission',
    description: 'Your description'
  },
  // Add more missions
];
```

## Customizing Colors

File: `src/App.css`
```css
:root {
  --primary: #075133;        /* Main green */
  --primary-light: #0a6b44;  /* Lighter green */
  --primary-dark: #054128;   /* Darker green */
  --secondary: #8B7355;      /* Brown accent */
  --accent: #D4A574;         /* Light brown */
  --bg-light: #FAF8F5;       /* Light background */
  --text-dark: #2C2C2C;      /* Dark text */
  --text-gray: #6B6B6B;      /* Gray text */
}
```

## Adding New Pages

1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add it to the component tree

Example:
```jsx
// src/components/Admissions.jsx
import React from 'react';
import './Admissions.css';

const Admissions = () => {
  return (
    <section className="admissions">
      {/* Your content */}
    </section>
  );
};

export default Admissions;
```

Then in `App.jsx`:
```jsx
import Admissions from './components/Admissions';

function App() {
  return (
    <div className="App">
      {/* ... other components */}
      <Admissions />
      {/* ... */}
    </div>
  );
}
```

## Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on vercel.com
3. Deploy automatically

### Netlify
1. Drag and drop `dist` folder
2. Or connect GitHub repository

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## Common Issues

### Port already in use
Change port in `vite.config.js`:
```js
server: {
  port: 3001, // Change this
  open: true
}
```

### Images not loading
- Check image URLs
- Use absolute URLs or import images
- Ensure images are in `public` folder

### Styles not applying
- Check CSS import statements
- Clear browser cache
- Restart dev server

## Need Help?

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS

## Folder Structure Explained

```
react-school-website/
│
├── src/                      # Source files
│   ├── components/           # React components
│   │   ├── Header.jsx       # Component file
│   │   └── Header.css       # Component styles
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   └── main.jsx             # Entry point
│
├── public/                   # Static assets (if needed)
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

## Tips for Development

1. **Hot Module Replacement**: Changes appear instantly without page reload
2. **Component Reusability**: Create once, use everywhere
3. **CSS Modules**: Each component has its own CSS file
4. **State Management**: Use React hooks (useState, useEffect) when needed
5. **Performance**: Vite provides lightning-fast build times

Happy coding! 🚀
