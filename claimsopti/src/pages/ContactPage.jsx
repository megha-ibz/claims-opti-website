import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { ContactForm } from '../components/ContactForm.jsx'

export function ContactPage() {
  const [params] = useSearchParams()
  const status = params.get('status') || ''
  const source = params.get('source') || ''

  const breadcrumbItems = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { label: 'Contact Us' },
    ],
    []
  )

  const scrollToForm = () => {
    const el = document.getElementById('full_name')
    const form = document.getElementById('contactForm')
    el?.focus()
    if (form) {
      const top = form.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/10 text-green text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                Get In Touch
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] capitalize">
                <span className="text-navy">Let&apos;s Talk About </span>
                <span className="text-green">Automating Your Shop</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Whether you&apos;re an independent body shop or a multi-shop operator, we&apos;d love to show you what
                ClaimsOpti.AI can do for your business.
              </p>
            </div>
            <div className="reveal reveal-delay-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-green/40">
                <img
                  src="/assets/img/feature-voice.jpg"
                  alt="Welcoming front desk at a modern auto body shop"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Quick Response</p>
                  <p className="text-xs text-gray-400">Replies within hours</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">No Commitment</p>
                  <p className="text-xs text-gray-400">Explore freely</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              {status === 'success' && (
                <div
                  className="mb-8 p-4 rounded-lg bg-green/10 border border-green/20 text-green text-center font-medium"
                  role="alert"
                >
                  Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-center font-medium" role="alert">
                  Something went wrong. Please try again or email us directly at hello@claimsopti.ai.
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10 reveal">
                <h2 className="text-xl font-bold mb-1 capitalize">
                  <span className="text-navy">Send us a </span>
                  <span className="text-green">message</span>
                </h2>
                <p className="text-sm text-gray-500 mb-8">Fill out the form below and we&apos;ll get back to you quickly.</p>

                <ContactForm defaultSource={source} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6 reveal reveal-delay-2">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="text-lg font-bold mb-4 capitalize">
                    <span className="text-navy">Contact </span>
                    <span className="text-green">Information</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email us</p>
                        <a href="mailto:hello@claimsopti.ai" className="text-sm font-medium text-navy hover:text-green transition-colors">
                          hello@claimsopti.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Call us</p>
                        <p className="text-sm font-medium text-navy">[Phone, TBD]</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <p className="text-xs text-gray-500">Based in</p>
                        <p className="text-sm font-medium text-navy">Tempe, Arizona</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navy rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4 capitalize">
                    <span className="text-white">Why </span>
                    <span className="text-green-light">reach out?</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Get a personalized demo of the platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Learn how AI can reduce your clerical work by 80%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Discuss pricing and implementation timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">Join the early access program</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-navy">500+</p>
                    <p className="text-xs text-gray-500 mt-1">Shops Onboarding</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-green">4.9/5</p>
                    <p className="text-xs text-gray-500 mt-1">Satisfaction Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">FAQ</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
              <span className="text-navy">Frequently </span>
              <span className="text-green">Asked Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            <div className="card-hover bg-white rounded-xl border border-gray-100 p-6 reveal reveal-delay-1">
              <h3 className="text-base font-bold mb-2 capitalize">
                <span className="text-navy">How long </span>
                <span className="text-green">does it take to get started?</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Most shops are up and running within days, not weeks. Our team handles the setup and integration with your
                existing estimating platform so you can start seeing results fast.
              </p>
            </div>
            <div className="card-hover bg-white rounded-xl border border-gray-100 p-6 reveal reveal-delay-2">
              <h3 className="text-base font-bold mb-2 capitalize">
                <span className="text-navy">Which estimating platforms </span>
                <span className="text-green">do you support?</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ClaimsOpti.AI works with CCC ONE, Mitchell, and Audatex. We translate estimates across all three platforms seamlessly.
              </p>
            </div>
            <div className="card-hover bg-white rounded-xl border border-gray-100 p-6 reveal reveal-delay-3">
              <h3 className="text-base font-bold mb-2 capitalize">
                <span className="text-navy">Is ClaimsOpti.AI suitable for </span>
                <span className="text-green">single-location shops?</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Absolutely. While we&apos;re built to scale for MSOs, independent single-location shops benefit just as much from
                automated claims processing, estimate translation, and document management.
              </p>
            </div>
            <div className="card-hover bg-white rounded-xl border border-gray-100 p-6 reveal reveal-delay-4">
              <h3 className="text-base font-bold mb-2 capitalize">
                <span className="text-navy">What kind of support </span>
                <span className="text-green">do you provide?</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We provide hands-on onboarding, dedicated account support, and ongoing assistance. Our team understands the collision
                repair industry inside and out, you&apos;re not talking to generic tech support.
              </p>
            </div>
            <div className="card-hover bg-white rounded-xl border border-gray-100 p-6 reveal">
              <h3 className="text-base font-bold mb-2 capitalize">
                <span className="text-navy">How does </span>
                <span className="text-green">pricing work?</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pricing is based on your shop&apos;s volume and number of locations. Contact us for a personalized quote, there are no
                long-term contracts required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
            <span className="text-white">Ready to </span>
            <span className="text-green-light">automate your shop?</span>
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">
            Join collision repair shops across America who are eliminating clerical bottlenecks with ClaimsOpti.AI.
          </p>
          <div className="mt-10">
            <button
              type="button"
              onClick={scrollToForm}
              className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg"
            >
              Fill Out the Form Above
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
