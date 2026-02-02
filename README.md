# DPS Robertsganj - School Website

A modern, responsive website for Delhi Public Secondary School, Robertsganj built with React.

## Features

- 🎨 Modern, clean design with earthy color scheme (#075133)
- 📱 Fully responsive across all devices
- ⚡ Built with React for component reusability
- 🎯 Optimized performance with Vite
- 🎭 Smooth animations and transitions
- ♿ Accessible design principles

## Project Structure

```
react-school-website/
├── src/
│   ├── components/
│   │   ├── UtilityBar.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── QuickStats.jsx
│   │   ├── WelcomeSection.jsx
│   │   ├── FacilitiesSection.jsx
│   │   ├── MissionSection.jsx
│   │   ├── PrincipalSection.jsx
│   │   ├── NoticeSection.jsx
│   │   ├── CTABanner.jsx
│   │   ├── Footer.jsx
│   │   └── [component].css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation

1. Navigate to the project directory:
```bash
cd react-school-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Components

### Core Components

- **UtilityBar**: Top navigation bar with quick links
- **Header**: Main navigation with sticky behavior
- **Hero**: Full-screen hero section with call-to-action
- **QuickStats**: Statistics banner (faculty, students, results)
- **WelcomeSection**: Introduction with features
- **FacilitiesSection**: Grid of school facilities
- **MissionSection**: Mission and values cards
- **PrincipalSection**: Principal's message
- **NoticeSection**: Latest announcements
- **CTABanner**: Call-to-action for admissions
- **Footer**: Complete footer with links and social media

## Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #075133;
  --primary-light: #0a6b44;
  --primary-dark: #054128;
  /* ... */
}
```

### Content
Each component has data arrays that can be easily modified:
- Update stats in `QuickStats.jsx`
- Modify facilities in `FacilitiesSection.jsx`
- Edit mission values in `MissionSection.jsx`
- Change notices in `NoticeSection.jsx`

### Images
Replace image URLs in components with your own images.

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **Modern JavaScript (ES6+)**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

Build the project for production:
```bash
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License

© 2024 Delhi Public Secondary School Robertsganj. All Rights Reserved.

## Contact

For any queries regarding the website:
- Email: delhipublicschoolrobertsganj@gmail.com
- Phone: +91 9820967960
