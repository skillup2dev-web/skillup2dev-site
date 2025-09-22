# SkillUp2Dev Landing Page

A modern, responsive landing page for SkillUp2Dev - a coding education platform that helps students build skills and land developer jobs.

## 🚀 Features

- **Modern Design**: Clean, professional layout with blue color palette
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Accessible**: Keyboard navigation and screen reader friendly
- **Performance**: Optimized loading and smooth animations

## 📁 Project Structure

```
Skillup2Dev/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── logo.svg            # Brand logo (SVG format)
└── README.md           # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #1E90FF
- **White**: #FFFFFF  
- **Light Gray**: #F5F5F5
- **Dark Gray**: #333333

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Sections
1. **Header**: Logo + navigation menu
2. **Hero**: Main headline with call-to-action
3. **About**: Mission and key features
4. **Courses**: Android, Java Spring Boot, Python training
5. **Testimonials**: Student success stories
6. **Contact**: Google Form integration
7. **Footer**: Social links and quick navigation

## 🛠️ Setup Instructions

### Local Development
1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Deployment Options

#### GitHub Pages
1. Push files to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

#### Netlify
1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Or connect your GitHub repository for automatic deployments

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📝 Customization

### Google Form Integration
Replace the placeholder URL in `index.html`:
```html
<iframe src="YOUR_ACTUAL_GOOGLE_FORM_URL" ...></iframe>
```

### Logo Replacement
Replace `logo.svg` with your actual logo file. Supported formats:
- SVG (recommended for scalability)
- PNG (with transparent background)
- JPG (if no transparency needed)

### Content Updates
- **Brand Name**: Update in HTML and CSS
- **Tagline**: Modify in hero section
- **Course Information**: Update course cards in HTML
- **Testimonials**: Replace with real student testimonials
- **Contact Information**: Update footer and contact section

### Social Media Links
Update the footer social links with your actual profiles:
```html
<a href="YOUR_LINKEDIN_URL" class="social-link">LinkedIn</a>
<a href="YOUR_TWITTER_URL" class="social-link">Twitter</a>
<!-- etc. -->
```

## 🎯 Key Features Implemented

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Flexible grid layouts
- Touch-friendly navigation

### Performance Optimizations
- Lazy loading for images
- Smooth scrolling
- Optimized animations
- Minimal JavaScript

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

### Interactive Elements
- Mobile hamburger menu
- Smooth scroll navigation
- Hover effects on cards and buttons
- Loading states and animations

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Features

- Collapsible navigation menu
- Touch-optimized buttons
- Responsive typography
- Optimized images and layouts

## 🚀 Future Enhancements

- Add more course categories
- Implement a blog section
- Add student portfolio showcase
- Integrate with learning management system
- Add live chat functionality
- Implement analytics tracking

## 📞 Support

For questions or customization help, contact:
- Email: contact@skillup2dev.com
- Website: [Your Website URL]

## 📄 License

This project is created for SkillUp2Dev. All rights reserved.

---

**Built with ❤️ for aspiring developers**