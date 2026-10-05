/*
 * VAHAI TAX: progressive enhancement only.
 * The site is fully readable and crawlable without this file.
 * It powers the off-canvas drawer (open/close, focus handling, scroll lock).
 */
(function () {
  'use strict';

  var toggle = document.getElementById('menu-toggle');
  var drawer = document.getElementById('drawer');
  if (!toggle || !drawer) return;

  var root = document.documentElement;
  var iconOpen = toggle.querySelector('[data-icon="open"]');
  var iconClose = toggle.querySelector('[data-icon="close"]');
  var labelOpen = toggle.getAttribute('data-label-open');
  var labelClose = toggle.getAttribute('data-label-close');
  var desktop = window.matchMedia('(min-width: 1024px)');

  function focusables() {
    return drawer.querySelectorAll('a[href], button, summary');
  }

  function setOpen(open) {
    drawer.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? labelClose : labelOpen);
    if (iconOpen) iconOpen.classList.toggle('hidden', open);
    if (iconClose) iconClose.classList.toggle('hidden', !open);
    root.classList.toggle('overflow-hidden', open);
    if (open) {
      var first = focusables()[0];
      if (first) first.focus({ preventScroll: true });
    }
  }

  toggle.addEventListener('click', function () {
    setOpen(!drawer.classList.contains('is-open'));
  });

  drawer.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (a) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (!drawer.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      setOpen(false);
      toggle.focus();
      return;
    }
    if (e.key === 'Tab') {
      var items = Array.prototype.slice.call(focusables());
      items.push(toggle);
      var idx = items.indexOf(document.activeElement);
      if (e.shiftKey && idx <= 0) {
        e.preventDefault();
        items[items.length - 1].focus();
      } else if (!e.shiftKey && idx === items.length - 1) {
        e.preventDefault();
        items[0].focus();
      }
    }
  });

  function onResize(ev) {
    if (ev.matches) setOpen(false);
  }
  if (desktop.addEventListener) desktop.addEventListener('change', onResize);
  else if (desktop.addListener) desktop.addListener(onResize);
})();

// Mega Menu Slider
(function() {
  const sliders = document.querySelectorAll(".mega-slider");
  sliders.forEach(slider => {
    const slides = slider.querySelectorAll(".mega-slide");
    const dots = slider.querySelectorAll(".mega-slider-dots button");
    const prevBtn = slider.querySelector(".mega-slider-prev");
    const nextBtn = slider.querySelector(".mega-slider-next");
    if (slides.length <= 1) return;

    let current = 0;
    let timer;
    const interval = parseInt(slider.getAttribute("data-interval") || "3000", 10);

    function showSlide(idx) {
      if (idx < 0) idx = slides.length - 1;
      if (idx >= slides.length) idx = 0;
      
      slides[current].classList.remove("opacity-100", "z-10");
      slides[current].classList.add("opacity-0", "z-0");
      dots[current].classList.remove("bg-vahai-orange");
      dots[current].classList.add("bg-slate-300");
      
      current = idx;
      
      slides[current].classList.remove("opacity-0", "z-0");
      slides[current].classList.add("opacity-100", "z-10");
      dots[current].classList.remove("bg-slate-300");
      dots[current].classList.add("bg-vahai-orange");
    }

    function next() {
      showSlide(current + 1);
    }
    
    function prev() {
      showSlide(current - 1);
    }

    function start() {
      timer = setInterval(next, interval);
    }

    function stop() {
      clearInterval(timer);
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        showSlide(idx);
        stop();
        start();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prev();
        stop();
        start();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        next();
        stop();
        start();
      });
    }

    const hoverTarget = slider.closest(".dropdown-hover");
    if (hoverTarget) {
      hoverTarget.addEventListener("mouseenter", start);
      hoverTarget.addEventListener("mouseleave", stop);
    }
  });
})();