/* ── SYSTEM MODAL ── */
  let _sysUrl = '';
  function openSystemModal(name, url) {
    _sysUrl = url;
    document.getElementById('system-modal-name').textContent = name;
    document.getElementById('system-modal-blocked-link').href = url;
    const iframe = document.getElementById('system-modal-iframe');
    const loading = document.getElementById('system-modal-loading');
    const blocked = document.getElementById('system-modal-blocked');
    loading.style.display = 'flex';
    blocked.style.display = 'none';
    iframe.style.display = 'none';
    iframe.src = '';
    document.getElementById('system-modal').classList.add('sm-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      iframe.onload = () => {
        loading.style.display = 'none';
        iframe.style.display = 'block';
      };
      iframe.onerror = () => showBlocked();
      iframe.src = url;
      // fallback: se não carregar em 8s, mostra mensagem
      setTimeout(() => {
        if (loading.style.display !== 'none') showBlocked();
      }, 8000);
    }, 100);
  }
  function showBlocked() {
    document.getElementById('system-modal-loading').style.display = 'none';
    document.getElementById('system-modal-iframe').style.display = 'none';
    document.getElementById('system-modal-blocked').style.display = 'flex';
  }
  function closeSystemModal() {
    document.getElementById('system-modal').classList.remove('sm-open');
    document.getElementById('system-modal-iframe').src = '';
    document.body.style.overflow = '';
  }
  function openSystemNewTab() {
    window.open(_sysUrl, '_blank');
  }

  function openBulletModal(title, detail) {
    document.querySelector('.slide.active .bullet-exp:first-child .bullet-chevron')?.classList.add('pulsed');
    const modal = document.getElementById('bullet-modal');
    document.getElementById('modal-mtitle').textContent = title;
    document.getElementById('modal-mbody').textContent = detail;
    modal.style.display = 'flex';
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('bm-open')));
  }
  function closeBulletModal() {
    const modal = document.getElementById('bullet-modal');
    modal.classList.remove('bm-open');
    setTimeout(() => { modal.style.display = 'none'; }, 280);
  }

  function goToSlide(idx) {
    if (isAnimating || idx === current) return;
    isAnimating = true;
    const dir = idx > current ? 'left' : 'right';
    const prev = slides[current];
    const next = slides[idx];

    prev.classList.remove('active');
    prev.classList.add('exit-' + dir);

    next.style.transform = dir === 'left' ? 'translateX(60px)' : 'translateX(-60px)';
    next.classList.add('active');
    void next.offsetWidth;
    next.style.transform = '';

    current = idx;
    updateUI();

    /* reveal cards on slide 2 */
    if (current === 1) { revealEcoCards(); animateCounters(); }

    setTimeout(() => {
      prev.classList.remove('exit-left', 'exit-right');
      isAnimating = false;
    }, 650);
  }

  function navigate(dir) { goToSlide(Math.max(0, Math.min(TOTAL - 1, current + dir))); }