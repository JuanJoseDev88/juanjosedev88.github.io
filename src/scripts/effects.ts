import { createParticles } from './particles';
import { updateEnergyBar } from './energyBar';
import { smoothScrollToSection } from './smoothScroll';
import { updateActiveNavigation } from './activeNavigation';
import { initializeContactForm } from './contactForm';

// Initialize all portfolio effects
export function initializePortfolioEffects() {
    // Create particles
    createParticles();
    
    // Initialize contact form
    initializeContactForm();

    // Add scroll events
    window.addEventListener('scroll', () => {
        updateEnergyBar();
        updateActiveNavigation();
    });
    
    // Add click events to navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e: Event) => {
            e.preventDefault();
            const target = e.currentTarget as HTMLAnchorElement;
            
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            target.classList.add('active');
            
            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                smoothScrollToSection(targetId);
            }
        });
    });
    
    // Add click events to hero buttons
    document.querySelectorAll('.hero .mega-button').forEach(button => {
        button.addEventListener('click', (e: Event) => {
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                smoothScrollToSection(targetId);
            }
        });
    });
    
    // Initialize energy bar
    updateEnergyBar();
}