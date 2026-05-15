import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header.jsx'
import { Footer } from '../components/Footer.jsx'
import { CtaPopup } from '../components/CtaPopup.jsx'
import { useSiteShell } from '../hooks/useSiteShell.js'

export function SiteLayout() {
  useSiteShell()

  return (
    <>
      <a
        href="#mainContent"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[999] focus:px-4 focus:py-2 focus:bg-green focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <div
        className="scroll-progress fixed top-0 left-0 right-0 z-[60] h-0.5 bg-navy/10 pointer-events-none"
        id="scrollProgress"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <div
          className="scroll-progress__fill h-full w-0 bg-gradient-to-r from-green to-green-light"
          id="scrollProgressBar"
        />
      </div>

      <Header />
      <div className="h-16 lg:h-20" />

      <main id="mainContent">
        <Outlet />
      </main>

      <Footer />

      <CtaPopup />

      <button
        type="button"
        id="backToTop"
        className="back-to-top fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-green shadow-lg hover:bg-green hover:text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 sm:bottom-8 sm:right-8"
        aria-label="Back to top"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <noscript>
        <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
    </>
  )
}
