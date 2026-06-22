/* ============================================================
   Zero-Perspective-Slides · 翻页控制器
   - 键盘:← → Space Home End
   - 触屏:左右滑动
   - 按钮:底部 next / prev / first / last
   - URL hash 同步(可选)
   ============================================================ */

(function () {
  'use strict';

  const slides = Array.from(document.querySelectorAll('.slide'));
  const total = slides.length;
  let current = 0;

  // ---------- 状态栏 ----------
  const counter = document.querySelector('.deck-topbar__counter .now');
  const totalEl = document.querySelector('.deck-topbar__counter .total');
  const fill = document.querySelector('.deck-progress__fill');

  if (totalEl) totalEl.textContent = '/' + String(total).padStart(2, '0');

  function go(idx) {
    if (idx < 0 || idx >= total) return;
    slides[current].classList.remove('active');
    current = idx;
    slides[current].classList.add('active');

    if (counter) counter.textContent = String(current + 1).padStart(2, '0');
    if (fill) fill.style.width = ((current + 1) / total * 100).toFixed(2) + '%';

    // 更新按钮状态
    document.querySelectorAll('[data-nav]').forEach(btn => {
      const a = btn.getAttribute('data-nav');
      btn.disabled = (a === 'first' || a === 'prev') ? current === 0 : current === total - 1;
    });

    // hash 同步
    history.replaceState(null, '', '#' + (current + 1));
  }
  function next() { go(Math.min(current + 1, total - 1)); }
  function prev() { go(Math.max(current - 1, 0)); }
  function first() { go(0); }
  function last() { go(total - 1); }

  // ---------- 键盘 ----------
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ': // space
        e.preventDefault(); next(); break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); first(); break;
      case 'End':
        e.preventDefault(); last(); break;
    }
  });

  // ---------- 按钮 ----------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-nav]');
    if (!btn) return;
    switch (btn.getAttribute('data-nav')) {
      case 'first': first(); break;
      case 'prev':  prev(); break;
      case 'next':  next(); break;
      case 'last':  last(); break;
    }
  });

  // ---------- 触屏滑动 ----------
  let touchStartX = null;
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next(); else prev();
    }
    touchStartX = null;
  });

  // ---------- 滚轮(防误触,改为 ctrl+wheel 才翻) ----------
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      if (e.deltaY > 0) next(); else prev();
    }
  }, { passive: false });

  // ---------- 启动 ----------
  // 从 hash 恢复
  const h = parseInt(location.hash.replace('#', ''), 10);
  if (!isNaN(h) && h >= 1 && h <= total) go(h - 1);
  else go(0);

})();
