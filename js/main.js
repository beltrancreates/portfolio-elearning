// =============================
// SCRIPTS GLOBALES
// =============================

// Función para marcar enlace activo en navegación
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// Función para animaciones suaves de entrada
function animateOnScroll() {
  const elements = document.querySelectorAll('.card, .content-block, .entry');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Función para microinteracciones
function addMicroInteractions() {
  // Hover en botones
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });

  // Hover en tarjetas
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
}

// Inicialización cuando DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  animateOnScroll();
  addMicroInteractions();
});

// Función para scroll suave a secciones
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}