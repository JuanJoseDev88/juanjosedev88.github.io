// Particle system
export function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Energy bar animation based on scroll
export function updateEnergyBar() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    const energyFill = document.getElementById('energyFill');
    if (energyFill) {
        energyFill.style.height = scrollPercentage + '%';
    }
}

// Smooth scrolling for navigation links
export function smoothScrollToSection(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update active navigation based on scroll position
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const targetId = '#' + section.id;
            navLinks.forEach(link => {
                if (link.getAttribute('href') === targetId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}

// Initialize all portfolio effects
export function initializePortfolioEffects() {
    // Create particles
    createParticles();
    
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