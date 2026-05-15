import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-green via-green/60 to-transparent" />

      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl lg:text-2xl font-bold capitalize">
                <span className="text-white">Ready to eliminate </span>
                <span className="text-green-light">clerical bottlenecks?</span>
              </h3>
              <p className="mt-2 text-sm text-gray-400">Get started with ClaimsOpti.AI today. No commitment required.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/contact?source=footer"
                className="btn-cta inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg transition-all"
              >
                Request Early Access
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block" aria-label="ClaimsOpti.AI home">
              <img
                src="/assets/img/logo.png"
                alt="ClaimsOpti.AI"
                width="220"
                height="52"
                className="h-10 lg:h-12 w-auto max-w-[220px] object-contain object-left rounded-md"
                decoding="async"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              AI-powered automation for collision repair shops and MSO operators. From estimate translation to claim closure, every clerical step, automated.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-xs text-gray-300 font-medium">SOC 2 Ready</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-xs text-gray-300 font-medium">256-bit SSL</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">Pages</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2">
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/features/estimate-translation"
                  className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Estimate Translation
                </Link>
              </li>
              <li>
                <Link
                  to="/features/claims-automation"
                  className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Claims Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/features/document-management"
                  className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Document Management
                </Link>
              </li>
              <li>
                <Link
                  to="/features/ai-voice-communication"
                  className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  AI Voice &amp; Communication
                </Link>
              </li>
              <li>
                <Link
                  to="/features/scalable-capacity"
                  className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-3 h-3 text-green/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                  Scalable Capacity
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@claimsopti.ai"
                  className="group flex items-start gap-3 text-sm text-gray-400 hover:text-green transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green/10 group-hover:border-green/20 transition-colors">
                    <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email us</p>
                    <span className="font-medium">hello@claimsopti.ai</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Call us</p>
                    <span className="font-medium">[Phone, TBD]</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Based in</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Tempe%2C%20Arizona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white/90 hover:text-green transition-colors"
                    >
                      Tempe, Arizona
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {year} ClaimsOpti.AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/contact?source=footer-privacy"
                className="text-xs text-gray-500 hover:text-green transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact?source=footer-terms"
                className="text-xs text-gray-500 hover:text-green transition-colors"
              >
                Terms of Service
              </Link>
              <Link to="/features" className="text-xs text-gray-500 hover:text-green transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-green/3 rounded-full blur-3xl pointer-events-none" />
    </footer>
  )
}
