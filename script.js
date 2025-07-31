// SICUMS Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initScrollReveal();
    initHeaderScroll();
    initMobileMenu();
    initSmoothScrolling();
    initContactForm();
    initProjectModals();
    initWhatsAppButton();
    initHeroAnimations();
    initCounterAnimation();
    initParticleSystem();
    
    // ScrollReveal Configuration
    function initScrollReveal() {
        if (typeof ScrollReveal !== 'undefined') {
            const sr = ScrollReveal({
                distance: '60px',
                duration: 1000,
                delay: 200,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                origin: 'bottom',
                reset: false
            });

            // Hero section
            sr.reveal('.hero h1', { origin: 'left' });
            sr.reveal('.hero p', { origin: 'left', delay: 200 });
            sr.reveal('.hero .cta-button', { origin: 'left', delay: 400 });
            sr.reveal('.hero-image', { origin: 'right', delay: 300 });

            // Service cards
            sr.reveal('.service-card', { 
                origin: 'bottom',
                interval: 200,
                scale: 0.8
            });

            // About section
            sr.reveal('.about h2', { origin: 'top' });
            sr.reveal('.about p', { origin: 'bottom', delay: 200 });
            sr.reveal('.about .grid > div', { 
                origin: 'bottom',
                interval: 100
            });

            // Services section
            sr.reveal('#servicios h2', { origin: 'top' });
            sr.reveal('#servicios .grid > div', { 
                origin: 'bottom',
                interval: 200
            });

            // Testimonials
            sr.reveal('.testimonial-card', { 
                origin: 'bottom',
                interval: 200
            });

            // Projects
            sr.reveal('#proyectos h2', { origin: 'top' });
            sr.reveal('.project-category', { 
                origin: 'bottom',
                interval: 100
            });
            sr.reveal('.project-card', { 
                origin: 'bottom',
                interval: 200,
                scale: 0.8
            });

            // Contact section
            sr.reveal('#contacto h2', { origin: 'top' });
            sr.reveal('.contact-form', { origin: 'left' });
            sr.reveal('.contact-info', { origin: 'right' });
        }
    }

    // Header scroll effect
    function initHeaderScroll() {
        const header = document.getElementById('header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }

            lastScrollTop = scrollTop;
        });
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = mobileMenuBtn.querySelector('i');

        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('hidden');
            
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('mobile-menu-enter');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('mobile-menu-enter');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Contact form handling
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                // Show loading state
                submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    // Show success message
                    showSuccessMessage('¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.');
                    
                    // Reset form
                    this.reset();
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            });
        }
    }

    // Show success message
    function showSuccessMessage(message) {
        // Create success message element
        const successDiv = document.createElement('div');
        successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg success-message z-50';
        successDiv.innerHTML = `
            <div class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-xl"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(successDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    // Project modal functionality
    function initProjectModals() {
        const modal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.getElementById('close-modal');
        const projectButtons = document.querySelectorAll('.project-details-btn');

        // Project data
        const projects = {
            'Residencial Las Palmas': {
                title: 'Residencial Las Palmas',
                description: 'Proyecto residencial de 50 viviendas con acabados premium. Incluye áreas comunes, estacionamiento y servicios de mantenimiento.',
                details: [
                    '50 viviendas de 2 y 3 recámaras',
                    'Acabados premium en cocinas y baños',
                    'Áreas comunes con alberca y jardines',
                    'Estacionamiento techado',
                    'Sistema de seguridad 24/7',
                    'Servicios de mantenimiento incluidos'
                ],
                services: ['Construcción', 'Urbanización', 'Mantenimiento'],
                duration: '18 meses',
                client: 'Desarrolladora Las Palmas S.A.'
            },
            'Urbanización Central': {
                title: 'Urbanización Central',
                description: 'Desarrollo urbano integral con parques, áreas recreativas y servicios comunitarios.',
                details: [
                    'Parque central de 5 hectáreas',
                    'Áreas deportivas y recreativas',
                    'Sistema de drenaje pluvial',
                    'Alumbrado público LED',
                    'Pavimentación de calles principales',
                    'Jardines y áreas verdes'
                ],
                services: ['Urbanización', 'Construcción', 'Suministros'],
                duration: '12 meses',
                client: 'Gobierno Municipal'
            },
            'Centro Comercial Plaza': {
                title: 'Centro Comercial Plaza',
                description: 'Construcción de centro comercial moderno con 20 locales comerciales y estacionamiento.',
                details: [
                    '20 locales comerciales',
                    'Estacionamiento para 100 vehículos',
                    'Sistema de aire acondicionado central',
                    'Sistema de seguridad y vigilancia',
                    'Área de restaurantes',
                    'Plaza central con fuente'
                ],
                services: ['Construcción', 'Suministros', 'Mantenimiento'],
                duration: '24 meses',
                client: 'Inversiones Plaza S.A.'
            }
        };

        // Open modal
        projectButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                const projectTitle = projectCard.querySelector('h3').textContent;
                const project = projects[projectTitle];
                
                if (project) {
                    modalTitle.textContent = project.title;
                    modalContent.innerHTML = `
                        <div class="space-y-6">
                            <div>
                                <h4 class="font-montserrat font-bold text-gray-dark mb-2">Descripción</h4>
                                <p class="text-gray-600">${project.description}</p>
                            </div>
                            
                            <div>
                                <h4 class="font-montserrat font-bold text-gray-dark mb-2">Características principales</h4>
                                <ul class="space-y-2">
                                    ${project.details.map(detail => `<li class="flex items-start space-x-2">
                                        <i class="fas fa-check text-green-500 mt-1"></i>
                                        <span class="text-gray-600">${detail}</span>
                                    </li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 class="font-montserrat font-bold text-gray-dark mb-2">Servicios incluidos</h4>
                                    <div class="flex flex-wrap gap-2">
                                        ${project.services.map(service => `<span class="bg-orange-light text-orange-primary px-3 py-1 rounded-full text-sm font-medium">${service}</span>`).join('')}
                                    </div>
                                </div>
                                <div>
                                    <h4 class="font-montserrat font-bold text-gray-dark mb-2">Información del proyecto</h4>
                                    <div class="space-y-1 text-sm">
                                        <p><strong>Duración:</strong> ${project.duration}</p>
                                        <p><strong>Cliente:</strong> ${project.client}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    modal.classList.remove('hidden');
                    modal.classList.add('modal-enter');
                }
            });
        });

        // Close modal
        function closeModalFunction() {
            modal.classList.add('hidden');
            modal.classList.remove('modal-enter');
        }

        closeModal.addEventListener('click', closeModalFunction);
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunction();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModalFunction();
            }
        });
    }

    // WhatsApp button functionality
    function initWhatsAppButton() {
        const whatsappBtn = document.querySelector('a[href*="wa.me"]');
        
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function(e) {
                // Add click tracking if needed
                console.log('WhatsApp button clicked');
            });
        }
    }

    // Intersection Observer for custom animations
    function initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        // Observe elements with custom animation classes
        const animatedElements = document.querySelectorAll('.sr-fade-up, .sr-fade-left, .sr-fade-right, .sr-scale');
        animatedElements.forEach(el => observer.observe(el));
    }

    // Initialize intersection observer
    initIntersectionObserver();

    // Performance optimization: Lazy load images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
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
    }

    // Initialize lazy loading
    initLazyLoading();

    // Add loading states to buttons
    function initButtonLoadingStates() {
        const buttons = document.querySelectorAll('button[type="submit"], .cta-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (this.type === 'submit') {
                    // Loading state is handled in form submission
                    return;
                }
                
                // Add loading state for other buttons
                const originalText = this.textContent;
                this.innerHTML = '<span class="loading"></span> Cargando...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 2000);
            });
        });
    }

    // Initialize button loading states
    initButtonLoadingStates();
    
    // Service Cards 3D Effects
    initServiceCards3D();
    
    // Premium Services Animations
    initPremiumServices();
    
    // Service Cards 3D Effects
    function initServiceCards3D() {
        const serviceCards = document.querySelectorAll('.service-card-3d');
        
        serviceCards.forEach(card => {
            // Mouse move effect for 3D rotation
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = (y / rect.height) * -10;
                const rotateY = (x / rect.width) * 10;
                
                this.querySelector('div').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });
            
            // Mouse leave effect
            card.addEventListener('mouseleave', function() {
                this.querySelector('div').style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            });
            
            // Click effect for buttons
            const button = card.querySelector('button');
            if (button) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Add ripple effect
                    const ripple = document.createElement('div');
                    ripple.className = 'absolute inset-0 bg-white/30 rounded-xl scale-0 animate-ping';
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                    
                    // Show success message
                    showSuccessMessage('¡Gracias! Un asesor se pondrá en contacto contigo pronto.');
                });
            }
        });
        
        // Parallax effect for floating elements
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            
            serviceCards.forEach((card, index) => {
                const floatingElements = card.querySelectorAll('.absolute');
                floatingElements.forEach((element, elemIndex) => {
                    element.style.transform = `translateY(${rate + (index * 10) + (elemIndex * 5)}px)`;
                });
            });
        });
    }

    // Premium Services Animations
    function initPremiumServices() {
        const premiumCards = document.querySelectorAll('.premium-service-card');
        
        premiumCards.forEach((card, index) => {
            // Staggered entrance animation
            card.style.animationDelay = `${index * 0.2}s`;
            
            // Mouse tracking for subtle 3D effect
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = (y / rect.height) * -3;
                const rotateY = (x / rect.width) * 3;
                
                this.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            // Mouse leave effect
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
            });
            
            // Premium button interactions
            const button = card.querySelector('.premium-cta-btn');
            if (button) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Premium ripple effect
                    const ripple = document.createElement('div');
                    ripple.className = 'absolute inset-0 bg-white/40 rounded-xl scale-0 animate-ping';
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 800);
                    
                    // Premium success message
                    showSuccessMessage('¡Excelente! Un asesor premium se pondrá en contacto contigo en las próximas 24 horas.');
                });
            }
            
            // Text animation on hover
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const features = card.querySelectorAll('.space-y-4 > div');
            
            card.addEventListener('mouseenter', function() {
                if (title) title.style.transitionDelay = '0s';
                if (description) description.style.transitionDelay = '0.1s';
                features.forEach((feature, idx) => {
                    feature.style.transitionDelay = `${0.2 + (idx * 0.1)}s`;
                });
            });
        });
        
        // Premium parallax effect
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            
            premiumCards.forEach((card, index) => {
                const floatingElements = card.querySelectorAll('.absolute');
                floatingElements.forEach((element, elemIndex) => {
                    element.style.transform = `translateY(${rate + (index * 15) + (elemIndex * 8)}px) scale(${1 + (elemIndex * 0.1)})`;
                });
            });
        });
        
        // Premium intersection observer for entrance animations
        const premiumObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'premiumEntrance 0.8s ease-out forwards';
                    premiumObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        premiumCards.forEach(card => {
            premiumObserver.observe(card);
        });
    }

    // Hero Animations
    function initHeroAnimations() {
        // Add magnetic effect to buttons
        const magneticButtons = document.querySelectorAll('a[href="#contacto"], a[href="#servicios"]');
        
        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });

        // Add parallax effect to floating elements
        const floatingElements = document.querySelectorAll('.animate-float');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            floatingElements.forEach((element, index) => {
                element.style.transform = `translateY(${rate + (index * 20)}px)`;
            });
        });

        // Add glow effect to title on hover
        const heroTitle = document.querySelector('#inicio h1');
        if (heroTitle) {
            heroTitle.addEventListener('mouseenter', function() {
                this.style.animation = 'textGlow 2s ease-in-out infinite';
            });
            
            heroTitle.addEventListener('mouseleave', function() {
                this.style.animation = '';
            });
        }
    }

    // Counter Animation
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.counter');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        };

        // Intersection Observer for counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    // Particle System
    function initParticleSystem() {
        const hero = document.querySelector('#inicio');
        if (!hero) return;

        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            hero.appendChild(particle);
        }

        // Mouse trail effect
        let mouseX = 0;
        let mouseY = 0;
        
        hero.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Create trail particles
            if (Math.random() > 0.8) {
                const trailParticle = document.createElement('div');
                trailParticle.className = 'particle';
                trailParticle.style.left = mouseX + 'px';
                trailParticle.style.top = mouseY + 'px';
                trailParticle.style.animationDuration = '1s';
                
                hero.appendChild(trailParticle);
                
                setTimeout(() => {
                    trailParticle.remove();
                }, 1000);
            }
        });
    }

    // Console welcome message
    console.log(`
    🏗️ SICUMS Website Loaded Successfully!
    
    Features included:
    ✅ Responsive design
    ✅ Smooth animations
    ✅ Contact form
    ✅ Project modals
    ✅ WhatsApp integration
    ✅ Mobile menu
    ✅ Scroll effects
    ✅ Hero animations
    ✅ Counter animations
    ✅ Particle system
    
    Contact: 2291144509
    Email: contacto@sicums.com.mx
    `);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for potential use in other scripts
window.SICUMS = {
    showSuccessMessage,
    debounce,
    throttle
}; 