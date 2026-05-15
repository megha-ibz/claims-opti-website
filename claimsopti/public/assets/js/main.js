document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Navigation Toggle ---
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            menuBtn.classList.toggle('hamburger-active');
            menuBtn.setAttribute('aria-expanded', !isOpen);
        });
    }

    // --- Navbar Shadow on Scroll ---
    const nav = document.getElementById('mainNav');
    if (nav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        }, { passive: true });
    }

    // --- Page scroll progress bar ---
    var scrollProgress = document.getElementById('scrollProgress');
    var scrollProgressBar = document.getElementById('scrollProgressBar');
    if (scrollProgress && scrollProgressBar) {
        function updateScrollProgress() {
            var root = document.documentElement;
            var scrollTop = window.scrollY != null ? window.scrollY : root.scrollTop;
            var scrollable = root.scrollHeight - window.innerHeight;
            var pct = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
            pct = Math.min(100, Math.max(0, pct));
            scrollProgressBar.style.width = pct + '%';
            scrollProgress.setAttribute('aria-valuenow', String(Math.round(pct)));
        }
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        window.addEventListener('resize', updateScrollProgress, { passive: true });
        updateScrollProgress();
    }

    // --- Back to top (floating) ---
    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        var backToTopThreshold = 400;
        function updateBackToTop() {
            if (window.scrollY > backToTopThreshold) {
                backToTop.classList.add('is-visible');
            } else {
                backToTop.classList.remove('is-visible');
            }
        }
        window.addEventListener('scroll', updateBackToTop, { passive: true });
        updateBackToTop();
        backToTop.addEventListener('click', function () {
            var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    }

    // --- CTA popup (once per session; timer or scroll depth) ---
    var ctaPopup = document.getElementById('ctaPopup');
    if (ctaPopup) {
        var ctaKey = 'coiCtaPopup';
        var ctaShown = false;
        var ctaLastFocus = null;
        var ctaDelayMs = 12000;
        var ctaScrollPct = 38;
        var ctaTimer = null;

        function ctaDismissed() {
            try { return window.sessionStorage.getItem(ctaKey) === '1'; } catch (e) { return false; }
        }
        function ctaMarkDismissed() {
            try { window.sessionStorage.setItem(ctaKey, '1'); } catch (e) {}
        }
        function ctaPathAllowed() {
            var path = (window.location.pathname || '').toLowerCase();
            return path.indexOf('contact') === -1;
        }
        function ctaScrollRatio() {
            var root = document.documentElement;
            var max = root.scrollHeight - window.innerHeight;
            if (max <= 0) { return 1; }
            return (window.scrollY != null ? window.scrollY : root.scrollTop) / max;
        }
        function openCtaPopup() {
            if (ctaShown) { return; }
            if (!ctaPathAllowed() || ctaDismissed()) { return; }
            ctaShown = true;
            if (ctaTimer) {
                clearTimeout(ctaTimer);
                ctaTimer = null;
            }
            ctaLastFocus = document.activeElement;
            ctaPopup.classList.remove('hidden');
            ctaPopup.classList.add('flex', 'items-center', 'justify-center');
            ctaPopup.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overflow-hidden');

            function ctaFocusClose() {
                var btn = ctaPopup.querySelector('.cta-popup__close');
                if (btn && typeof btn.focus === 'function') { btn.focus(); }
            }

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                ctaPopup.classList.add('is-open');
                ctaFocusClose();
            } else {
                window.requestAnimationFrame(function () {
                    window.requestAnimationFrame(function () {
                        ctaPopup.classList.add('is-open');
                        ctaFocusClose();
                    });
                });
            }
        }
        function closeCtaPopup(options) {
            if (!ctaPopup.classList.contains('is-open')) { return; }
            var o = options || {};
            ctaPopup.classList.remove('is-open', 'flex', 'items-center', 'justify-center');
            ctaPopup.classList.add('hidden');
            ctaPopup.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overflow-hidden');
            ctaMarkDismissed();
            if (!o.skipFocusRestore && ctaLastFocus && typeof ctaLastFocus.focus === 'function') {
                try { ctaLastFocus.focus(); } catch (e) {}
            }
        }

        ctaPopup.addEventListener('click', function (e) {
            if (e.target && e.target.closest && e.target.closest('[data-cta-close]')) {
                closeCtaPopup();
            }
        });

        var ctaLink = document.getElementById('ctaPopupLink');
        if (ctaLink) {
            ctaLink.addEventListener('click', function () {
                closeCtaPopup({ skipFocusRestore: true });
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key !== 'Escape' || ctaPopup.classList.contains('hidden') || !ctaPopup.classList.contains('is-open')) { return; }
            closeCtaPopup();
        }, true);

        function ctaTryTrigger() {
            if (ctaShown || ctaDismissed() || !ctaPathAllowed()) { return; }
            openCtaPopup();
        }

        if (!ctaDismissed() && ctaPathAllowed()) {
            ctaTimer = setTimeout(function () { ctaTryTrigger(); }, ctaDelayMs);
            window.addEventListener('scroll', function () {
                if (ctaScrollRatio() >= ctaScrollPct / 100) { ctaTryTrigger(); }
            }, { passive: true });
        }
    }

    // --- Desktop Mega Menu ---
    var megaMenuWrapper = document.getElementById('megaMenuWrapper');
    var megaMenu = document.getElementById('megaMenu');
    var megaMenuBtn = document.getElementById('megaMenuBtn');
    var megaMenuChevron = document.getElementById('megaMenuChevron');
    var megaMenuTimeout;

    if (megaMenuWrapper && megaMenu) {
        function openMegaMenu() {
            clearTimeout(megaMenuTimeout);
            megaMenu.classList.add('mega-menu-open');
            if (megaMenuChevron) megaMenuChevron.classList.add('rotated');
            if (megaMenuBtn) megaMenuBtn.setAttribute('aria-expanded', 'true');
        }
        function closeMegaMenu() {
            megaMenuTimeout = setTimeout(function () {
                megaMenu.classList.remove('mega-menu-open');
                if (megaMenuChevron) megaMenuChevron.classList.remove('rotated');
                if (megaMenuBtn) megaMenuBtn.setAttribute('aria-expanded', 'false');
            }, 150);
        }

        megaMenuWrapper.addEventListener('mouseenter', openMegaMenu);
        megaMenuWrapper.addEventListener('mouseleave', closeMegaMenu);
        megaMenu.addEventListener('mouseenter', function () { clearTimeout(megaMenuTimeout); });
        megaMenu.addEventListener('mouseleave', closeMegaMenu);

        if (megaMenuBtn) {
            megaMenuBtn.addEventListener('click', function (e) {
                e.preventDefault();
                var isOpen = megaMenu.classList.contains('mega-menu-open');
                if (isOpen) { closeMegaMenu(); } else { openMegaMenu(); }
            });
        }

        document.addEventListener('click', function (e) {
            if (!megaMenuWrapper.contains(e.target)) {
                megaMenu.classList.remove('mega-menu-open');
                if (megaMenuChevron) megaMenuChevron.classList.remove('rotated');
                if (megaMenuBtn) megaMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                megaMenu.classList.remove('mega-menu-open');
                if (megaMenuChevron) megaMenuChevron.classList.remove('rotated');
                if (megaMenuBtn) { megaMenuBtn.setAttribute('aria-expanded', 'false'); megaMenuBtn.focus(); }
            }
        });
    }

    // --- Mobile Features Accordion ---
    var mobileFeatureToggle = document.getElementById('mobileFeatureToggle');
    var mobileFeatureSubmenu = document.getElementById('mobileFeatureSubmenu');
    var mobileFeatureChevron = document.getElementById('mobileFeatureChevron');

    if (mobileFeatureToggle && mobileFeatureSubmenu) {
        mobileFeatureToggle.addEventListener('click', function () {
            var isOpen = !mobileFeatureSubmenu.classList.contains('hidden');
            mobileFeatureSubmenu.classList.toggle('hidden');
            if (mobileFeatureChevron) mobileFeatureChevron.classList.toggle('rotated');
            mobileFeatureToggle.setAttribute('aria-expanded', !isOpen);
        });
    }

    // --- Scroll Reveal (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal');
    function markRevealInViewport() {
        var vh = window.innerHeight || document.documentElement.clientHeight;
        revealElements.forEach(function (el) {
            if (el.classList.contains('revealed')) return;
            var r = el.getBoundingClientRect();
            if (r.top < vh && r.bottom > 0) {
                el.classList.add('revealed');
            }
        });
    }
    if (revealElements.length > 0) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0, rootMargin: '0px 0px 12% 0px' });

            revealElements.forEach(function (el) {
                observer.observe(el);
            });
            // First paint: IO can miss already-visible items in some engines (or strict margins)
            requestAnimationFrame(function () {
                markRevealInViewport();
            });
            setTimeout(markRevealInViewport, 50);
        } else {
            revealElements.forEach(function (el) {
                el.classList.add('revealed');
            });
        }
    }

    // --- Performance Section: Counter + Progress Bar Animation ---
    var perfSection = document.getElementById('performanceSection');
    if (perfSection && 'IntersectionObserver' in window) {
        var perfAnimated = false;

        function animateCounter(el) {
            var target = parseFloat(el.getAttribute('data-target'));
            var decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
            var duration = 1800;
            var startTime = null;

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                var current = eased * target;
                el.textContent = current.toFixed(decimals);
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target.toFixed(decimals);
                }
            }

            requestAnimationFrame(step);
        }

        function animateProgressBars() {
            var bars = perfSection.querySelectorAll('.progress-fill');
            bars.forEach(function (bar) {
                var targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth + '%';
                bar.classList.add('filled');
            });
        }

        var perfObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !perfAnimated) {
                    perfAnimated = true;

                    var counters = perfSection.querySelectorAll('.counter');
                    counters.forEach(function (counter, index) {
                        setTimeout(function () {
                            animateCounter(counter);
                        }, index * 150);
                    });

                    setTimeout(function () {
                        animateProgressBars();
                    }, 400);

                    perfObserver.unobserve(perfSection);
                }
            });
        }, { threshold: 0.25 });

        perfObserver.observe(perfSection);
    }

    // --- Stats Strip: Count-Up + Scale Pop ---
    var statsStrip = document.getElementById('statsStrip');
    if (statsStrip && 'IntersectionObserver' in window) {
        var statsAnimated = false;

        function animateStatCounter(el, delay) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var duration = 1400;

            setTimeout(function () {
                var startTime = null;

                function tick(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(eased * target);
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        el.textContent = target;
                        el.classList.add('stat-pop');
                    }
                }

                requestAnimationFrame(tick);
            }, delay);
        }

        var statsObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    var counters = statsStrip.querySelectorAll('.stat-counter');
                    counters.forEach(function (counter, index) {
                        animateStatCounter(counter, 200 + index * 120);
                    });
                    statsObserver.unobserve(statsStrip);
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsStrip);
    }

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const fields = {
            full_name:  { required: true,  minLength: 2, message: 'Please enter your full name (at least 2 characters).' },
            email:      { required: true,  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
            phone:      { required: false, pattern: /^[\d\s\+\-\(\)]*$/, message: 'Please enter a valid phone number.' },
            shop_name:  { required: true,  minLength: 2, message: 'Please enter your shop name (at least 2 characters).' },
            message:    { required: false, maxLength: 1000, message: 'Message must be under 1000 characters.' }
        };

        function validateField(name) {
            var input = contactForm.querySelector('[name="' + name + '"]');
            if (!input) return true;

            var rule = fields[name];
            var value = input.value.trim();
            var errorEl = document.getElementById('error-' + name);

            // Clear previous state
            input.classList.remove('field-error', 'field-success');
            if (errorEl) errorEl.textContent = '';

            if (rule.required && value.length === 0) {
                input.classList.add('field-error');
                if (errorEl) errorEl.textContent = rule.message;
                return false;
            }

            if (value.length > 0) {
                if (rule.minLength && value.length < rule.minLength) {
                    input.classList.add('field-error');
                    if (errorEl) errorEl.textContent = rule.message;
                    return false;
                }
                if (rule.maxLength && value.length > rule.maxLength) {
                    input.classList.add('field-error');
                    if (errorEl) errorEl.textContent = rule.message;
                    return false;
                }
                if (rule.pattern && !rule.pattern.test(value)) {
                    input.classList.add('field-error');
                    if (errorEl) errorEl.textContent = rule.message;
                    return false;
                }
            }

            if (value.length > 0) {
                input.classList.add('field-success');
            }
            return true;
        }

        // Real-time blur validation
        Object.keys(fields).forEach(function (name) {
            var input = contactForm.querySelector('[name="' + name + '"]');
            if (input) {
                input.addEventListener('blur', function () {
                    validateField(name);
                });
            }
        });

        // Form submit validation
        contactForm.addEventListener('submit', function (e) {
            var allValid = true;
            Object.keys(fields).forEach(function (name) {
                if (!validateField(name)) {
                    allValid = false;
                }
            });

            if (!allValid) {
                e.preventDefault();
                return;
            }

            // Disable submit button while processing
            var submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }
        });
    }

});
