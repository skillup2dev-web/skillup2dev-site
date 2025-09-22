// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const handleMobileMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', handleMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
const handleHeaderScroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
};

window.addEventListener('scroll', handleHeaderScroll);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature, .course-card, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation and enhancement
const handleFormEnhancement = () => {
    const formContainer = document.querySelector('.form-container');
    const placeholder = document.querySelector('.form-placeholder');
    
    // Check if Google Form is loaded
    const checkFormLoad = () => {
        const iframe = document.querySelector('.google-form');
        if (iframe && iframe.contentDocument) {
            placeholder.style.display = 'none';
        }
    };
    
    // Check form load after a delay
    setTimeout(checkFormLoad, 2000);
};

// Initialize form enhancement
document.addEventListener('DOMContentLoaded', handleFormEnhancement);

// Add loading states for better UX
const handleLoadingStates = () => {
    // Add loading state to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            if (e.target.getAttribute('href') === '#contact') {
                e.target.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);
            }
        });
    }
};

// Initialize loading states
document.addEventListener('DOMContentLoaded', handleLoadingStates);

// Add keyboard navigation support
const handleKeyboardNavigation = () => {
    document.addEventListener('keydown', (e) => {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
};

// Initialize keyboard navigation
document.addEventListener('DOMContentLoaded', handleKeyboardNavigation);

// Performance optimization: Lazy load images
const handleLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', handleLazyLoading);

// Add scroll progress indicator
const handleScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #1E90FF, #28A745);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    const updateProgress = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    };
    
    window.addEventListener('scroll', updateProgress);
};

// Dynamic button state changes on scroll
const handleButtonStateChanges = () => {
    const ctaButton = document.querySelector('.cta-button');
    const courseCards = document.querySelectorAll('.course-card');
    
    if (!ctaButton) return;
    
    const updateButtonState = () => {
        const scrollTop = window.pageYOffset;
        const coursesSection = document.querySelector('#courses');
        
        if (coursesSection) {
            const coursesTop = coursesSection.offsetTop;
            const coursesHeight = coursesSection.offsetHeight;
            const coursesBottom = coursesTop + coursesHeight;
            
            // Change button text and style when scrolling through courses
            if (scrollTop >= coursesTop - 200 && scrollTop <= coursesBottom + 200) {
                ctaButton.textContent = 'Enroll Now';
                ctaButton.style.background = 'var(--accent-green)';
                ctaButton.style.transform = 'scale(1.05)';
            } else {
                ctaButton.textContent = 'Get Started';
                ctaButton.style.background = 'var(--primary-blue)';
                ctaButton.style.transform = 'scale(1)';
            }
        }
        
        // Add hover effect to course cards on scroll
        courseCards.forEach((card, index) => {
            const cardTop = card.offsetTop;
            const cardHeight = card.offsetHeight;
            const cardBottom = cardTop + cardHeight;
            
            if (scrollTop >= cardTop - 300 && scrollTop <= cardBottom + 300) {
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
                card.style.borderColor = 'var(--accent-green)';
            } else {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'var(--shadow)';
                card.style.borderColor = 'transparent';
            }
        });
    };
    
    window.addEventListener('scroll', updateButtonState);
    
    // Initial call
    updateButtonState();
};

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', handleScrollProgress);

// Initialize button state changes
document.addEventListener('DOMContentLoaded', handleButtonStateChanges);

// Add smooth reveal animations for sections
const handleSectionReveal = () => {
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });
    
    // Add CSS for revealed state
    const style = document.createElement('style');
    style.textContent = `
        section.revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
};

// Initialize section reveal
document.addEventListener('DOMContentLoaded', handleSectionReveal);

// Add error handling for external resources
const handleErrorHandling = () => {
    // Handle Google Form loading errors
    const iframe = document.querySelector('.google-form');
    if (iframe) {
        iframe.addEventListener('error', () => {
            const placeholder = document.querySelector('.form-placeholder');
            if (placeholder) {
                placeholder.innerHTML = `
                    <h4>Form Temporarily Unavailable</h4>
                    <p>Please contact us directly at:</p>
                    <p><strong>Email:</strong> contact@skillup2dev.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                `;
            }
        });
    }
    
    // Handle image loading errors
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });
};

// Initialize error handling
document.addEventListener('DOMContentLoaded', handleErrorHandling);

// Add analytics tracking (placeholder)
const handleAnalytics = () => {
    // Track CTA button clicks
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Analytics tracking code would go here
            console.log('CTA button clicked');
        });
    }
    
    // Track course card interactions
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            const courseTitle = card.querySelector('.course-title').textContent;
            console.log(`Course card clicked: ${courseTitle}`);
        });
    });
};

// Initialize analytics
document.addEventListener('DOMContentLoaded', handleAnalytics);

// Show success message after Google Form submission via hidden iframe
document.addEventListener('DOMContentLoaded', () => {
    const hiddenIframe = document.querySelector('iframe[name="hidden_iframe"]');
    const form = document.getElementById('enquiry-form');
    const successBanner = document.querySelector('.form-success');
    if (!hiddenIframe || !form || !successBanner) return;

    let submitted = false;

    // Client-side validation on submit
    form.addEventListener('submit', (e) => {
        // Use HTML5 validity; if invalid, prevent and focus first invalid
        if (!form.checkValidity()) {
            e.preventDefault();
            const firstInvalid = form.querySelector(':invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }
        submitted = true;
    });

    hiddenIframe.addEventListener('load', () => {
        if (!submitted) return; // Only show after an actual submit
        submitted = false;
        successBanner.classList.add('show');
        successBanner.setAttribute('aria-hidden', 'false');
        form.reset();
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});