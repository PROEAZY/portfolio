# Instagram Portfolio Website

A modern, responsive portfolio website perfect for showcasing your YouTube channel, works, and free resources. Designed to be linked in your Instagram bio.

## Features

- 🎨 Modern, clean design with Instagram-inspired color scheme
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast loading (pure HTML/CSS/JavaScript, no frameworks)
- 🎯 Smooth scroll animations
- 🔗 Easy to customize and update

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Brief bio and introduction
3. **YouTube Section** - Featured video and channel subscription links
4. **Works Section** - Grid layout showcasing your projects
5. **Free Resources Section** - Downloadable resources for your audience
6. **Contact/Footer** - Social media links and contact information

## Getting Started

1. **Download or clone** this repository
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your brand

## Customization Guide

### 1. Update Personal Information

Edit `index.html` and replace:
- Your name/title in the hero section
- About section text
- Social media links in the footer
- Email address

### 2. Add Your YouTube Channel

In the YouTube section:
- Replace the video placeholder with your YouTube embed code:
  ```html
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
  ```
- Update the YouTube channel links with your actual channel URL

### 3. Add Your Works/Projects

In the works section, update each work card:
- Replace placeholder images with your project images
- Update project titles and descriptions
- Add links to your projects

### 4. Add Free Resources

In the resources section:
- Update resource titles and descriptions
- Add download links or file paths
- Change icons as needed

### 5. Customize Colors

Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #E1306C;    /* Instagram pink */
    --secondary-color: #833AB4;  /* Instagram purple */
    --accent-color: #FCAF45;     /* Instagram yellow */
    /* ... other colors */
}
```

### 6. Update Navigation

Modify the navigation menu in `index.html` to add or remove sections as needed.

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Tips

- Use high-quality images for your projects (recommended: 1200x800px)
- Keep descriptions concise and engaging
- Test on mobile devices before publishing
- Update content regularly to keep it fresh
- Add your actual social media links for better engagement

## License

Feel free to use this template for your personal portfolio. Customize it to match your style and brand!

## Support

If you need help customizing this portfolio, feel free to reach out or check the code comments for guidance.

---

**Enjoy your new portfolio! 🚀**

