// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optimized ripple effect (disabled on mobile for performance)
const isMobileDevice = window.innerWidth <= 480 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobileDevice) {
    // Add ripple effect on link card click (desktop only)
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .link-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Optimized animations for mobile performance
const linkCards = document.querySelectorAll('.link-card');
const isMobile = window.innerWidth <= 480 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobile) {
    // Only run heavy animations on desktop
    linkCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
    });

    // Intersection Observer for animations (desktop only)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe all link cards
    linkCards.forEach(card => {
        observer.observe(card);
    });
} else {
    // On mobile, just show everything immediately
    linkCards.forEach(card => {
        card.style.opacity = '1';
    });
}

// Add hover sound effect (optional - can be removed if not needed)
// This is a visual-only enhancement, no actual sound

// Prevent default behavior for internal links that don't have targets
document.querySelectorAll('.link-card[href^="#"]').forEach(card => {
    card.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#works' || href === '#resources') {
            // These are placeholder links - you can add actual functionality later
            console.log('Clicked:', href);
        }
    });
});

// Smooth page transitions for internal links
document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        // Only apply to internal links (not external or anchors)
        if (href && !href.startsWith('http') && !href.startsWith('#') && href.endsWith('.html')) {
            const currentPage = document.querySelector('.games-page, .android-games-page, .tools-page, .contact-page, .app-container');
            if (currentPage) {
                // Add exit animation
                currentPage.style.animation = 'pageExit 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                
                // Small delay before navigation for smooth transition
                setTimeout(() => {
                    window.location.href = href;
                }, 200);
            }
        }
    });
});
