  // Nav scroll effect
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Fade-up animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    const phone = document.getElementById('phoneInput').value.trim();
    if (!phone) { alert('Vui lòng nhập số điện thoại!'); return; }
    alert(`Cảm ơn bạn! Chúng tôi sẽ liên hệ ${phone} trong vòng 24 giờ. 🎉`);
    document.getElementById('phoneInput').value = '';
  }

  // Hamburger menu (simple toggle)
  document.getElementById('hamburger').addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (links) {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '70px';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = '#fff';
      links.style.padding = '20px 6%';
      links.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      links.style.zIndex = '998';
    }
  });

  // Smooth number count animation for stats
  function animateCount(el, target) {
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target + (el.dataset.suffix || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current) + (el.dataset.suffix || '');
      }
    }, 16);
  }