import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Global behaviors from legacy assets/js/main.js (reveal, nav, scroll bar, counters, CTA popup, etc.)
 */
export function useSiteShell() {
  const location = useLocation()

  useEffect(() => {
    const nav = document.getElementById('mainNav')
    const onScrollNav = () => {
      if (!nav) return
      if (window.scrollY > 10) nav.classList.add('nav-scrolled')
      else nav.classList.remove('nav-scrolled')
    }
    window.addEventListener('scroll', onScrollNav, { passive: true })
    onScrollNav()

    const scrollProgress = document.getElementById('scrollProgress')
    const scrollProgressBar = document.getElementById('scrollProgressBar')
    const updateScrollProgress = () => {
      if (!scrollProgress || !scrollProgressBar) return
      const root = document.documentElement
      const scrollTop = window.scrollY ?? root.scrollTop
      const scrollable = root.scrollHeight - window.innerHeight
      let pct = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0
      pct = Math.min(100, Math.max(0, pct))
      scrollProgressBar.style.width = `${pct}%`
      scrollProgress.setAttribute('aria-valuenow', String(Math.round(pct)))
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress, { passive: true })
    updateScrollProgress()

    const backToTop = document.getElementById('backToTop')
    const backToTopThreshold = 400
    const updateBackToTop = () => {
      if (!backToTop) return
      if (window.scrollY > backToTopThreshold) backToTop.classList.add('is-visible')
      else backToTop.classList.remove('is-visible')
    }
    window.addEventListener('scroll', updateBackToTop, { passive: true })
    updateBackToTop()
    const onBackToTopClick = () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    }
    backToTop?.addEventListener('click', onBackToTopClick)

    const revealElements = document.querySelectorAll('.reveal')
    const markRevealInViewport = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      revealElements.forEach((el) => {
        if (el.classList.contains('revealed')) return
        const r = el.getBoundingClientRect()
        if (r.top < vh && r.bottom > 0) el.classList.add('revealed')
      })
    }
    let io
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              io.unobserve(entry.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px 12% 0px' }
      )
      revealElements.forEach((el) => io.observe(el))
      requestAnimationFrame(() => markRevealInViewport())
      setTimeout(markRevealInViewport, 50)
    } else {
      revealElements.forEach((el) => el.classList.add('revealed'))
    }

    const perfSection = document.getElementById('performanceSection')
    let perfObserver
    if (perfSection && 'IntersectionObserver' in window) {
      let perfAnimated = false
      const animateCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-target'))
        const decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0
        const duration = 1800
        let startTime = null
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          const current = eased * target
          el.textContent = current.toFixed(decimals)
          if (progress < 1) requestAnimationFrame(step)
          else el.textContent = target.toFixed(decimals)
        }
        requestAnimationFrame(step)
      }
      const animateProgressBars = () => {
        perfSection.querySelectorAll('.progress-fill').forEach((bar) => {
          const w = bar.getAttribute('data-width')
          bar.style.width = `${w}%`
          bar.classList.add('filled')
        })
      }
      perfObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !perfAnimated) {
              perfAnimated = true
              perfSection.querySelectorAll('.counter').forEach((counter, index) => {
                setTimeout(() => animateCounter(counter), index * 150)
              })
              setTimeout(() => animateProgressBars(), 400)
              perfObserver.unobserve(perfSection)
            }
          })
        },
        { threshold: 0.25 }
      )
      perfObserver.observe(perfSection)
    }

    const statsStrip = document.getElementById('statsStrip')
    let statsObserver
    if (statsStrip && 'IntersectionObserver' in window) {
      let statsAnimated = false
      const animateStatCounter = (el, delay) => {
        const target = parseInt(el.getAttribute('data-target'), 10)
        const duration = 1400
        setTimeout(() => {
          let startTime = null
          const tick = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - (1 - progress) ** 3
            el.textContent = String(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
            else {
              el.textContent = String(target)
              el.classList.add('stat-pop')
            }
          }
          requestAnimationFrame(tick)
        }, delay)
      }
      statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !statsAnimated) {
              statsAnimated = true
              statsStrip.querySelectorAll('.stat-counter').forEach((counter, index) => {
                animateStatCounter(counter, 200 + index * 120)
              })
              statsObserver.unobserve(statsStrip)
            }
          })
        },
        { threshold: 0.3 }
      )
      statsObserver.observe(statsStrip)
    }

    const ctaPopup = document.getElementById('ctaPopup')
    const ctaKey = 'coiCtaPopup'
    let ctaShown = false
    let ctaLastFocus = null
    const ctaDelayMs = 12000
    const ctaScrollPct = 38
    let ctaTimer = null

    const ctaDismissed = () => {
      try {
        return sessionStorage.getItem(ctaKey) === '1'
      } catch {
        return false
      }
    }
    const ctaMarkDismissed = () => {
      try {
        sessionStorage.setItem(ctaKey, '1')
      } catch {
        /* ignore */
      }
    }
    const ctaPathAllowed = () => !location.pathname.toLowerCase().includes('contact')

    const ctaScrollRatio = () => {
      const root = document.documentElement
      const max = root.scrollHeight - window.innerHeight
      if (max <= 0) return 1
      return (window.scrollY ?? root.scrollTop) / max
    }

    const openCtaPopup = () => {
      if (!ctaPopup || ctaShown) return
      if (!ctaPathAllowed() || ctaDismissed()) return
      ctaShown = true
      if (ctaTimer) {
        clearTimeout(ctaTimer)
        ctaTimer = null
      }
      ctaLastFocus = document.activeElement
      ctaPopup.classList.remove('hidden')
      ctaPopup.classList.add('flex', 'items-center', 'justify-center')
      ctaPopup.setAttribute('aria-hidden', 'false')
      document.body.classList.add('overflow-hidden')

      const ctaFocusClose = () => {
        const btn = ctaPopup.querySelector('.cta-popup__close')
        btn?.focus?.()
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        ctaPopup.classList.add('is-open')
        ctaFocusClose()
      } else {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            ctaPopup.classList.add('is-open')
            ctaFocusClose()
          })
        })
      }
    }

    const closeCtaPopup = (options = {}) => {
      if (!ctaPopup || !ctaPopup.classList.contains('is-open')) return
      ctaPopup.classList.remove('is-open', 'flex', 'items-center', 'justify-center')
      ctaPopup.classList.add('hidden')
      ctaPopup.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('overflow-hidden')
      ctaMarkDismissed()
      if (!options.skipFocusRestore && ctaLastFocus?.focus) {
        try {
          ctaLastFocus.focus()
        } catch {
          /* ignore */
        }
      }
    }

    const onCtaPopupClick = (e) => {
      if (e.target?.closest?.('[data-cta-close]')) closeCtaPopup()
    }
    ctaPopup?.addEventListener('click', onCtaPopupClick)

    const ctaLink = document.getElementById('ctaPopupLink')
    const onCtaLinkClick = () => closeCtaPopup({ skipFocusRestore: true })
    ctaLink?.addEventListener('click', onCtaLinkClick)

    const onKeydownCta = (e) => {
      if (
        e.key !== 'Escape' ||
        ctaPopup?.classList.contains('hidden') ||
        !ctaPopup?.classList.contains('is-open')
      )
        return
      closeCtaPopup()
    }
    document.addEventListener('keydown', onKeydownCta, true)

    const ctaTryTrigger = () => {
      if (ctaShown || ctaDismissed() || !ctaPathAllowed()) return
      openCtaPopup()
    }

    const onScrollCta = () => {
      if (ctaScrollRatio() >= ctaScrollPct / 100) ctaTryTrigger()
    }

    if (ctaPopup && !ctaDismissed() && ctaPathAllowed()) {
      ctaTimer = setTimeout(() => ctaTryTrigger(), ctaDelayMs)
      window.addEventListener('scroll', onScrollCta, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', onScrollNav)
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
      window.removeEventListener('scroll', updateBackToTop)
      backToTop?.removeEventListener('click', onBackToTopClick)
      if (io) io.disconnect()
      if (perfObserver) perfObserver.disconnect()
      if (statsObserver) statsObserver.disconnect()
      ctaPopup?.removeEventListener('click', onCtaPopupClick)
      ctaLink?.removeEventListener('click', onCtaLinkClick)
      document.removeEventListener('keydown', onKeydownCta, true)
      window.removeEventListener('scroll', onScrollCta)
      if (ctaTimer) clearTimeout(ctaTimer)
    }
  }, [location.pathname])
}
