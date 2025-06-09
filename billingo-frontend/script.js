function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
