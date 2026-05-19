import { useEffect, useMemo } from 'react'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

function EngageBayForm() {
  useEffect(() => {
    if (document.getElementById('eh-form-script')) {
      if (window.EhAPI) {
        window.EhAPI.after_load = function () {
          window.EhAPI.set_account('hedd10f6tqki3gqusm6u26s89p', 'interbizconsulting')
          window.EhAPI.execute('rules')
        }
      }
      return
    }

    window.EhAPI = window.EhAPI || {}
    window.EhAPI.after_load = function () {
      window.EhAPI.set_account('hedd10f6tqki3gqusm6u26s89p', 'interbizconsulting')
      window.EhAPI.execute('rules')
    }

    const script = document.createElement('script')
    script.id = 'eh-form-script'
    script.type = 'text/javascript'
    script.async = true
    script.src = `//d2p078bqz5urf7.cloudfront.net/jsapi/ehform.js?v${new Date().getHours()}`
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="engage-hub-form-embed"
      id="eh_form_6216922870579200"
      data-id="6216922870579200"
    />
  )
}

const FEATURE_CHIPS = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
    label: 'Works with CCC ONE, Mitchell & Audatex',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    label: 'Most shops go live within days',
  },
]

const PROMISES = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: 'Go Live in Days',
    desc: 'Our team handles setup so you start fast',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: 'Free Onboarding',
    desc: 'No hidden setup fees, ever',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    ),
    title: 'Cancel Anytime',
    desc: 'No lock-in, no long-term commitment',
  },
]

export function SignupPage() {
  usePageMeta(
    'Sign Up for Estimate Transfers — ClaimsOpti.AI',
    'Sign up for ClaimsOpti.AI estimate transfer service. Seamlessly translate estimates across CCC ONE, Mitchell, and Audatex with AI-powered automation.'
  )

  const breadcrumbItems = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/estimate-transfer/signup', label: 'Estimate Transfer Signup' },
    ],
    []
  )

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-gradient-to-br from-gray-50 to-white relative">
        {/* Decorative glows — own overflow-hidden wrapper so sticky is unaffected */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(4,104,58,0.08) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(0,29,85,0.07) 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── Left: Value Proposition (sticky) ── */}
            <div className="lg:sticky lg:top-24 reveal">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/10 text-green text-sm font-semibold mb-6 border border-green/20">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                Get Started Today
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] capitalize">
                <span className="text-navy">Sign Up for </span>
                <span className="text-green">Estimate Transfers</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                Connect your shop to ClaimsOpti.AI and start translating estimates across all major
                platforms — automatically, accurately, and without the manual rework.
              </p>

              {/* Feature chips */}
              <ul className="mt-7 space-y-3">
                {FEATURE_CHIPS.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {icon}
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700 font-medium">{label}</span>
                  </li>
                ))}
              </ul>

              {/* Promise cards */}
              <div className="mt-8 space-y-3">
                {PROMISES.map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-navy/5 border border-navy/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="flex -space-x-2">
                  {['bg-green/30', 'bg-navy/20', 'bg-green/20', 'bg-navy/10'].map((bg, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-navy/40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  Shops across the US trust <span className="font-semibold text-navy">ClaimsOpti.AI</span>
                </p>
              </div>
            </div>

            {/* ── Right: EngageBay Form Card ── */}
            <div className="reveal reveal-delay-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Card header */}
                <div className="bg-gradient-to-r from-navy to-[#003070] px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-light"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white leading-tight">
                        Start Your Estimate Transfer Setup
                      </h2>
                      <p className="text-xs text-white/50 mt-0.5">
                        Fill out the form and we'll have you live within days
                      </p>
                    </div>
                  </div>
                </div>

                {/* EngageBay form body */}
                <div className="px-6 py-8 sm:px-8">
                  <EngageBayForm />
                </div>

                {/* Card footer — trust note */}
                <div className="px-6 pb-6 sm:px-8 -mt-2">
                  <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-green flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Your information is secure and never shared with third parties.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
