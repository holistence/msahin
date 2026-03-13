const toggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = mobileMenu.querySelectorAll('a');

toggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('active');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.14
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
