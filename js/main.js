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

  // Toast notification
  function showToast(type, title, message) {
    var existing = document.getElementById('meToast');
    if (existing) existing.remove();

    var icons = { success: '🎉', error: '❌', info: 'ℹ️', warn: '⚠️' };
    var colors = { success: '#00BFA5', error: '#E53E3E', info: '#2563EB', warn: '#FFB800' };

    var toast = document.createElement('div');
    toast.id = 'meToast';
    toast.style.cssText = [
      'position:fixed', 'top:24px', 'right:24px', 'z-index:9999',
      'background:#fff', 'border-radius:18px',
      'box-shadow:0 8px 40px rgba(0,0,0,0.18)',
      'padding:20px 24px 20px 20px',
      'display:flex', 'align-items:flex-start', 'gap:14px',
      'max-width:360px', 'width:calc(100vw - 48px)',
      'border-left:5px solid ' + colors[type],
      'transform:translateX(120%)',
      'transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      'font-family:Nunito,sans-serif'
    ].join(';');

    toast.innerHTML =
      '<div style="font-size:32px;line-height:1;flex-shrink:0">' + icons[type] + '</div>' +
      '<div style="flex:1;min-width:0">' +
        '<div style="font-size:15px;font-weight:800;color:#0F172A;margin-bottom:4px">' + title + '</div>' +
        '<div style="font-size:13px;color:#64748B;font-weight:600;line-height:1.5">' + message + '</div>' +
      '</div>' +
      '<button onclick="this.parentNode.remove()" style="background:none;border:none;font-size:18px;color:#94A3B8;cursor:pointer;flex-shrink:0;padding:0;line-height:1">✕</button>';

    // Progress bar
    var bar = document.createElement('div');
    bar.style.cssText = 'position:absolute;bottom:0;left:0;height:3px;border-radius:0 0 18px 18px;background:' + colors[type] + ';width:100%;transition:width 4s linear';
    toast.style.position = 'fixed';
    toast.appendChild(bar);
    document.body.appendChild(toast);

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        toast.style.transform = 'translateX(0)';
        setTimeout(function() { bar.style.width = '0%'; }, 50);
        setTimeout(function() {
          toast.style.transform = 'translateX(120%)';
          setTimeout(function() { if (toast.parentNode) toast.remove(); }, 400);
        }, 4500);
      });
    });
  }

  // Form submit CTA
  async function handleSubmit(e) {
    e.preventDefault();
    var btn = e.target.querySelector('button[type=submit]');
    var phone = document.getElementById('phoneInput').value.trim();
    if (!phone) {
      showToast('warn', 'Thiếu thông tin', 'Vui lòng nhập số điện thoại của bạn!');
      return;
    }
    if (btn) { btn.disabled = true; btn.textContent = 'Đang gửi...'; }
    try {
      await fetch('https://formsubmit.co/ajax/chien97666@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ phone: phone, _subject: '📞 Đăng ký tư vấn - ME Since 1988', _captcha: 'false' })
      });
      showToast('success', 'Đăng ký thành công! 🎉', 'Cảm ơn bạn! Chúng tôi sẽ liên hệ số ' + phone + ' trong vòng 24 giờ làm việc.');
      document.getElementById('phoneInput').value = '';
    } catch(_) {
      showToast('error', 'Không thể gửi', 'Vui lòng gọi trực tiếp: 0909.054.204');
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = 'Đăng Ký Ngay 🎯'; }
    }
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

  // Carousel slide
  function slideCarousel(dir) {
    const c = document.getElementById('coursesCarousel');
    if (c) c.scrollBy({ left: dir * 270, behavior: 'smooth' });
  }

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