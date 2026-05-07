(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initHeroSlider();
    initBackToTop();
    initScrollAnimations();
    initActiveNav();
    initSmoothScroll();
  });

  function initMobileMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      var spans = toggle.querySelectorAll('span');
      if (nav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    document.addEventListener('click', function(e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        var spans = toggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  function initHeroSlider() {
    var slides = document.querySelectorAll('.hero-slide');
    var navBtns = document.querySelectorAll('.hero-nav button');
    var prevBtn = document.querySelector('.hero-arrows.prev');
    var nextBtn = document.querySelector('.hero-arrows.next');
    if (slides.length === 0) return;

    var current = 0;
    var interval;

    function showSlide(index) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        if (navBtns[i]) navBtns[i].classList.remove('active');
      }
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (navBtns[current]) navBtns[current].classList.add('active');
    }

    function nextSlide() { showSlide(current + 1); }
    function prevSlide() { showSlide(current - 1); }

    function startAuto() { interval = setInterval(nextSlide, 6000); }
    function stopAuto() { clearInterval(interval); }

    startAuto();

    for (var i = 0; i < navBtns.length; i++) {
      (function(idx) {
        navBtns[idx].addEventListener('click', function() {
          stopAuto();
          showSlide(idx);
          startAuto();
        });
      })(i);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() { stopAuto(); prevSlide(); startAuto(); });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function() { stopAuto(); nextSlide(); startAuto(); });
    }

    var hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mouseenter', stopAuto);
      hero.addEventListener('mouseleave', startAuto);

      var touchStartX = 0;
      hero.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
      });
      hero.addEventListener('touchend', function(e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
          stopAuto();
          if (diff > 0) nextSlide(); else prevSlide();
          startAuto();
        }
      });
    }
  }

  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (elements.length === 0) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      for (var i = 0; i < elements.length; i++) {
        observer.observe(elements[i]);
      }
    } else {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('animated');
      }
    }
  }

  function initActiveNav() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav a');
    for (var i = 0; i < navLinks.length; i++) {
      var href = navLinks[i].getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        navLinks[i].classList.add('active');
      }
    }
  }

  function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var headerHeight = 70;
          var header = document.querySelector('.header');
          if (header) headerHeight = header.offsetHeight;
          var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          var nav = document.querySelector('.nav');
          if (nav) nav.classList.remove('open');
        }
      });
    }
  }
})();
