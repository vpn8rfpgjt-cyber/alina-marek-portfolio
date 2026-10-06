const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, {threshold: 0.12});

document.querySelectorAll('.project, .skill, .job, .lang').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `.is-visible{opacity:1!important;transform:translateY(0)!important}`;
document.head.appendChild(style);
