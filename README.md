# Blue Grass Academy 🎵🧘‍♀️🎨

A modern, responsive web application for Blue Grass Academy - a premier educational institution offering music classes, yoga sessions, and instrumental sales & services. Built with React, Vite, and modern web technologies.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Program Management**: Detailed program information with enrollment capabilities
- **Contact Forms**: Integrated contact forms with EmailJS support
- **Video Modal**: Embedded video player for promotional content
- **Gallery**: Visual showcase of academy activities and events
- **Dynamic Counters**: Animated statistics display on the homepage
- **Modern Routing**: Client-side navigation with React Router

## 📚 Programs Offered

### Offline Music Classes
- **Piano**: Classical and modern techniques (3:00 PM - 5:00 PM)
- **Guitar**: Acoustic and electric styles (4:00 PM - 6:00 PM)
- **Drums**: Rhythm fundamentals and coordination (5:00 PM - 7:00 PM)
- **Vocals**: Voice training and performance (6:00 PM - 8:00 PM)

### Yoga Classes
- **Morning Sessions**: Beginner-friendly wellness focus (6:00 AM - 10:30 AM)
- **Evening Sessions**: Relaxation and stress relief (4:00 PM - 8:00 PM)

### Instrumental Sales & Services
- **Instrument Sales**: Quality instruments for all skill levels (10:30 AM - 3:30 PM)
- **Repair Services**: Professional maintenance and repairs
- **Instrument Rentals**: Flexible rental plans for students and professionals

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern React with latest features
- **Vite 7.2.4** - Fast development and build tool
- **React Router 7.12.0** - Client-side routing
- **Framer Motion 12.29.0** - Animation library
- **React Icons 5.5.0** - Icon components

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React integration for Vite

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blue-grass-academy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
blue-grass-academy/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── logo.png           # Academy logo
│   └── ...
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Card.jsx       # Program card component
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Homepage hero section
│   │   ├── Layout.jsx     # Main layout wrapper
│   │   ├── ProgramDetail.jsx # Detailed program view
│   │   ├── VideoModal.jsx # Video player modal
│   │   └── ...
│   ├── contexts/          # React contexts
│   │   ├── VideoModalContext.jsx # Video modal state
│   │   └── ProgramEnrollmentContext.jsx # Enrollment state
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── About.jsx      # About page
│   │   ├── Courses.jsx    # Programs listing
│   │   ├── Contact.jsx    # Contact page
│   │   └── Gallery.jsx    # Photo gallery
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
# EmailJS Configuration required in .env file
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Setup Services

#### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key kept in .env file, sample file is also available
3. Add them to the `.env` file

## 🎨 Customization

### Adding New Programs

1. Update the `programData` object in `src/components/ProgramDetail.jsx`
2. Add corresponding routes in `src/App.jsx`
3. Create new card components in `src/pages/Home.jsx` if needed

### Styling

- Global styles are in `src/index.css`
- Component-specific styles are in corresponding `.css` files
- The project uses CSS modules for component isolation

### Images

- Add new images to the `public/images/` directory
- Reference them using absolute paths (e.g., `/images/your-image.png`)

## 🔧 Development

### Code Style

The project uses ESLint for code quality. Run the linter before committing:

```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and inquiries:
- Visit our website: [Blue Grass Academy](https://bluegrassacademy.com)
- Email: bluegrassacademybangalore@gmail.com
- Phone: +91 8792175588

## 🌐 Live Demo

Check out the live demo: [Blue Grass Academy Website](https://bluegrassacademy.vercel.app)

---

---

**Developed by:**

**Preetham M R**  
Product Developer  
[preethamarivu22@gmail.com](mailto:preethamarivu22@gmail.com)