import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function navClass(isActive) {
  return isActive ? 'text-green' : 'text-navy hover:text-green'
}

export function Header() {
  const location = useLocation()
  const path = location.pathname
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [signUpOpen, setSignUpOpen] = useState(false)
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false)
  const megaRef = useRef(null)
  const signUpRef = useRef(null)
  const megaTimer = useRef(null)

  const isFeatures = path.startsWith('/features')

  const clearMegaTimer = () => {
    if (megaTimer.current) {
      clearTimeout(megaTimer.current)
      megaTimer.current = null
    }
  }

  const openMega = useCallback(() => {
    clearMegaTimer()
    setMegaOpen(true)
  }, [])

  const closeMegaDelayed = useCallback(() => {
    clearMegaTimer()
    megaTimer.current = setTimeout(() => {
      setMegaOpen(false)
    }, 150)
  }, [])

  useEffect(() => {
    const onDocClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false)
      if (signUpRef.current && !signUpRef.current.contains(e.target)) setSignUpOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMegaOpen(false)
        setSignUpOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
    setSignUpOpen(false)
  }, [path])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-shadow duration-300"
      id="mainNav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="ClaimsOpti.AI home">
            <img
              src="/assets/img/logo.png"
              alt="ClaimsOpti.AI"
              width="280"
              height="66"
              className="h-11 sm:h-12 lg:h-[3.75rem] xl:h-16 w-auto max-w-[min(300px,68vw)] object-contain object-left rounded-md"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={({ isActive }) => `text-sm font-medium transition-colors duration-200 ${navClass(isActive)}`}>
              Home
            </NavLink>

            <div className="relative" id="megaMenuWrapper" ref={megaRef}>
              <button
                type="button"
                id="megaMenuBtn"
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${isFeatures ? 'text-green' : 'text-navy hover:text-green'}`}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onClick={(e) => {
                  e.preventDefault()
                  setMegaOpen((o) => !o)
                }}
                onMouseEnter={openMega}
                onMouseLeave={closeMegaDelayed}
              >
                Features
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${megaOpen ? 'rotated' : ''}`}
                  id="megaMenuChevron"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id="megaMenu"
                className={`mega-menu absolute top-full -left-80 mt-4 w-[700px] bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-200 z-50 ${
                  megaOpen ? 'mega-menu-open' : 'opacity-0 invisible translate-y-2'
                }`}
                onMouseEnter={openMega}
                onMouseLeave={closeMegaDelayed}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Platform Features</p>
                    </div>
                    <Link
                      to="/features"
                      className="text-xs font-semibold text-green hover:text-green/80 transition-colors flex items-center gap-1"
                    >
                      View All Features
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/features/estimate-translation"
                      className="mega-menu-item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green/20 transition-colors">
                        <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy group-hover:text-green transition-colors">Estimate Translation</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          Cross-platform estimate conversion between CCC, Mitchell &amp; Audatex
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/features/claims-automation"
                      className="mega-menu-item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                        <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy group-hover:text-green transition-colors">Claims Automation</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          Automated submission, tracking &amp; follow-ups with all major insurers
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/features/document-management"
                      className="mega-menu-item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green/20 transition-colors">
                        <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy group-hover:text-green transition-colors">Document Management</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          AI-powered document capture, organization &amp; audit-ready storage
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/features/ai-voice-communication"
                      className="mega-menu-item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0 group-hover:bg-navy/20 transition-colors">
                        <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy group-hover:text-green transition-colors">AI Voice &amp; Communication</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Automated voice calls, SMS &amp; email across all channels</p>
                      </div>
                    </Link>
                    <Link
                      to="/features/scalable-capacity"
                      className="mega-menu-item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group col-span-2"
                    >
                      <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green/20 transition-colors">
                        <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy group-hover:text-green transition-colors">Scalable Clerical Capacity</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          Handle 10x volume without hiring, elastic capacity for MSOs and peak seasons
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-b-2xl px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-xs text-gray-500">Built specifically for collision repair shops &amp; MSO operators</p>
                  <Link
                    to="/contact?source=megamenu"
                    className="text-xs font-semibold text-white bg-green px-4 py-2 rounded-lg hover:bg-green/90 transition-colors"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) => `text-sm font-medium transition-colors duration-200 ${navClass(isActive)}`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `text-sm font-medium transition-colors duration-200 ${navClass(isActive)}`}
            >
              Contact
            </NavLink>

            <div className="flex items-center gap-3 pl-2 border-l border-gray-200 ml-1">
              <Link
                to="/contact?source=client-login"
                className="text-xs font-semibold uppercase tracking-wide text-navy underline decoration-navy/30 underline-offset-4 hover:text-green hover:decoration-green/40 transition-colors whitespace-nowrap"
              >
                Client login
              </Link>
              <div className="relative flex items-stretch shadow-md rounded-lg" ref={signUpRef}>
                <Link
                  to="/contact?source=signup"
                  className="inline-flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white bg-navy rounded-l-lg hover:bg-navy/90 transition-colors"
                >
                  Sign up
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-2 min-w-[2.25rem] text-white bg-navy border-l border-white/15 rounded-r-lg hover:bg-navy/90 transition-colors"
                  aria-expanded={signUpOpen}
                  aria-haspopup="true"
                  aria-label="Sign up options"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSignUpOpen((o) => !o)
                  }}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${signUpOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute right-0 top-full mt-1.5 min-w-[14rem] w-max max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 transition-all duration-150 ${
                    signUpOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1 pointer-events-none'
                  }`}
                >
                  <p className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Services</p>
                  <Link
                    to="/estimate-transfer/signup"
                    className="block px-4 py-2.5 text-sm font-medium text-navy hover:bg-gray-50 transition-colors"
                    onClick={() => setSignUpOpen(false)}
                  >
                    Estimate transfer service
                  </Link>
                  <Link
                    to="/contact?service=digital-marketing"
                    className="block px-4 py-2.5 text-sm font-medium text-navy hover:bg-gray-50 transition-colors"
                    onClick={() => setSignUpOpen(false)}
                  >
                    Digital marketing service
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            id="mobileMenuBtn"
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${mobileOpen ? 'hamburger-active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="block w-6 h-0.5 bg-navy transition-all duration-300" id="hamburgerTop" />
            <span className="block w-6 h-0.5 bg-navy transition-all duration-300" id="hamburgerMid" />
            <span className="block w-6 h-0.5 bg-navy transition-all duration-300" id="hamburgerBot" />
          </button>
        </div>
      </div>

      <div id="mobileMenu" className={`md:hidden bg-white border-t border-gray-100 ${mobileOpen ? '' : 'hidden'}`}>
        <div className="px-4 py-4 space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-green/10 text-green' : 'text-navy hover:bg-gray-50'}`
            }
          >
            Home
          </NavLink>

          <div>
            <button
              type="button"
              id="mobileFeatureToggle"
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isFeatures ? 'bg-green/10 text-green' : 'text-navy hover:bg-gray-50'
              }`}
              aria-expanded={mobileFeaturesOpen}
              onClick={() => setMobileFeaturesOpen((o) => !o)}
            >
              <span>Features</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileFeaturesOpen ? 'rotated' : ''}`}
                id="mobileFeatureChevron"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="mobileFeatureSubmenu" className={`pl-4 mt-1 space-y-1 ${mobileFeaturesOpen ? '' : 'hidden'}`}>
              <Link to="/features" className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-green hover:bg-gray-50 transition-colors">
                All Features
              </Link>
              <Link
                to="/features/estimate-translation"
                className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-green hover:bg-gray-50 transition-colors"
              >
                Estimate Translation
              </Link>
              <Link
                to="/features/claims-automation"
                className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-green hover:bg-gray-50 transition-colors"
              >
                Claims Automation
              </Link>
              <Link
                to="/features/document-management"
                className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-green hover:bg-gray-50 transition-colors"
              >
                Document Management
              </Link>
              <Link
                to="/features/ai-voice-communication"
                className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-green hover:bg-gray-50 transition-colors"
              >
                AI Voice &amp; Communication
              </Link>
              <Link
                to="/features/scalable-capacity"
                className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-green hover:bg-gray-50 transition-colors"
              >
                Scalable Capacity
              </Link>
            </div>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-green/10 text-green' : 'text-navy hover:bg-gray-50'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-green/10 text-green' : 'text-navy hover:bg-gray-50'}`
            }
          >
            Contact
          </NavLink>
          <Link
            to="/contact?source=client-login"
            className="block px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy underline decoration-navy/30"
          >
            Client login
          </Link>
          <Link
            to="/contact?source=signup"
            className="block px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white bg-navy rounded-lg hover:bg-navy/90 transition-colors"
          >
            Sign up
          </Link>
          <div className="px-4 pb-2 space-y-1 border-b border-gray-100 mb-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 pt-1">Services</p>
            <Link
              to="/estimate-transfer/signup"
              className="block py-2 pl-2 text-sm text-gray-600 hover:text-green transition-colors"
            >
              Estimate transfer service
            </Link>
            <Link
              to="/contact?service=digital-marketing"
              className="block py-2 pl-2 text-sm text-gray-600 hover:text-green transition-colors"
            >
              Digital marketing service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
