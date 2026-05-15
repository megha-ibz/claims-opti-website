import { FeatureCrosslinksHero } from '../../components/FeatureCrosslinksHero.jsx'
import { FeatureCrosslinksRelated } from '../../components/FeatureCrosslinksRelated.jsx'
import { FeatureCrosslinksCta } from '../../components/FeatureCrosslinksCta.jsx'

/* eslint-disable react/no-unknown-property */

export function FeatureScalableCapacityBody() {
  return (
    <>
    <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/10 text-green text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
                        Core Feature
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] capitalize">
                        <span className="text-navy">Scalable Clerical </span><span className="text-green">Capacity</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        Peak season or slow season, ClaimsOpti.AI scales with your workload. Handle 10x the claim volume without hiring a single person. Add capacity instantly, scale down when you don’t need it. Pairs with <a href="/features/claims-automation" className="text-navy font-semibold underline decoration-green/30 hover:text-green">claims automation</a> and <a href="/features/ai-voice-communication" className="text-navy font-semibold underline decoration-green/30 hover:text-green">AI voice & communication</a> for peak loads.
                    </p>
                    <FeatureCrosslinksHero currentFeatureId="scalable-capacity" />
                    
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <a href="/contact?source=feature-scale" className="btn-cta inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg">
                            Request a Demo
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </a>
                        <a href="/features" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-green transition-colors shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                            All Features
                        </a>
                    </div>
                </div>
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-green/40">
                        <img src="/assets/img/features/feature-hero-scale.jpg" alt="Multi-location collision repair operation scaling with AI automation across multiple shop locations" className="w-full aspect-video object-cover" loading="eager" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                            <span className="text-sm font-extrabold text-green">10x</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-navy">Capacity Scaling</p>
                            <p className="text-xs text-gray-400">No additional hires</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-10 lg:py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="reveal reveal-delay-1"><p className="text-3xl font-extrabold text-navy">10<span className="text-green">x</span></p><p className="text-sm text-gray-500 mt-1">Volume Capacity</p></div>
                <div className="reveal reveal-delay-2"><p className="text-3xl font-extrabold text-navy">Zero</p><p className="text-sm text-gray-500 mt-1">Additional Hires</p></div>
                <div className="reveal reveal-delay-3"><p className="text-3xl font-extrabold text-navy">55<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Cost Reduction</p></div>
                <div className="reveal reveal-delay-4"><p className="text-3xl font-extrabold text-navy">Instant</p><p className="text-sm text-gray-500 mt-1">Scale-up Time</p></div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">The Problem</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">You Can’t Hire Your Way Out of a </span><span className="text-green">Claim Surge</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Hailstorms. Hurricane season. Multi-car pile-ups. Seasonal spikes. When claim volume surges, your shop’s clerical capacity becomes the bottleneck. Vehicles pile up faster than your team can process paperwork.</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">Hiring temporary staff takes weeks. Training them takes longer. By the time they’re productive, the surge may have passed, but you’re still paying their salary. For MSOs opening new locations, this cycle repeats with every expansion.</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">The fundamental problem: <strong>human clerical capacity is expensive, slow to scale, and impossible to scale down</strong>. Your shop needs a different approach.</p>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-lg font-bold mb-6 capitalize">
                            <span className="text-navy">The Cost of Manual </span><span className="text-green">Scaling</span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                                <span className="text-sm font-medium text-navy">New hire salary (annual)</span>
                                <span className="text-sm font-bold text-red-500">$35,000–$45,000</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                                <span className="text-sm font-medium text-navy">Time to hire + train</span>
                                <span className="text-sm font-bold text-red-500">6–8 weeks</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                                <span className="text-sm font-medium text-navy">Benefits & overhead</span>
                                <span className="text-sm font-bold text-red-500">+25–35%</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                                <span className="text-sm font-medium text-navy">Turnover rate (clerical)</span>
                                <span className="text-sm font-bold text-red-500">40–60% annually</span>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-red-50/50 rounded-xl border border-red-100/50">
                            <p className="text-sm text-gray-600 text-center"><span className="font-semibold text-red-500">Total cost per clerical employee:</span> $45,000–$60,000/year including overhead, with no guarantee they’ll stay.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">The Solution</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Elastic Capacity. </span><span className="text-green">Instant Scaling.</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">ClaimsOpti.AI provides unlimited clerical capacity that scales up instantly when demand spikes and scales down when it subsides. You only pay for what you use. Complements <a href="/features/estimate-translation" className="text-green font-semibold hover:underline">estimate translation</a> and <a href="/features/document-management" className="text-navy font-semibold hover:underline">document management</a> as document volume explodes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-1">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Instant </span><span className="text-green">Scale-Up</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">When claim volume surges, ClaimsOpti.AI absorbs the increase immediately. No hiring. No training. No ramp-up time. Process 10x your normal volume on day one of a surge.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-2">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Pay-Per-Use </span><span className="text-green">Pricing</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">No fixed headcount costs. You pay based on the claims processed, not the capacity available. High volume months cost more; quiet months cost less. Perfect alignment with revenue.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-3">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Multi-Location </span><span className="text-green">Ready</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Open a new location and have full clerical capacity from day one. Add 5 new shops to your MSO network and ClaimsOpti.AI handles them all without additional setup time.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">Comparison</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Manual Scaling vs. </span><span className="text-green">ClaimsOpti.AI</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-8">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-4 capitalize">
                        <span className="text-navy">Hiring More </span><span className="text-green">Staff</span>
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>6–8 weeks to hire and train</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>$45K–$60K per employee per year</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>40–60% annual turnover rate</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>Capacity fixed after hiring</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>Sick days, vacations, errors</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>Can’t scale down when demand drops</li>
                    </ul>
                </div>
                <div className="card-hover bg-white rounded-2xl border-2 border-green p-8 relative">
                    <span className="absolute -top-3 left-6 bg-green text-white text-xs font-bold px-3 py-1 rounded-full">Better Way</span>
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-4 capitalize">
                        <span className="text-navy">ClaimsOpti</span><span className="text-green">.AI</span>
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0"></span>Instant scale-up, no ramp time</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0"></span>55% lower cost than hiring</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0"></span>Zero turnover, zero training</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0"></span>Elastic capacity, scales with demand</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0"></span>24/7 availability, 98% accuracy</li>
                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0"></span>Scales down automatically, saving costs</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">Scenarios</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">When Scaling </span><span className="text-green">Matters Most</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">Storm Season </span><span className="text-green">Surges</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Hailstorms and hurricanes send claim volumes soaring overnight. ClaimsOpti.AI absorbs the surge instantly, processing hundreds of claims while your team focuses on getting vehicles repaired.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">MSO </span><span className="text-green">Expansion</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Opening a new location? ClaimsOpti.AI gives you full clerical capacity from day one. No need to hire and train an admin team before accepting your first repair order.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">New DRP </span><span className="text-green">Contracts</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Winning a new DRP contract means sudden volume increases. Scale your clerical capacity to match without worrying about whether your admin team can keep up.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">FAQ</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Common </span><span className="text-green">Questions</span>
                </h2>
            </div>
            <div className="space-y-4 reveal">
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Is there a limit to how much I can scale?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">No practical limit. ClaimsOpti.AI runs on cloud infrastructure that scales automatically. Whether you’re processing 10 claims or 10,000, the platform handles it with the same speed and accuracy.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">How does pricing work for variable volumes?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Pricing scales with usage. You have a base subscription for standard capacity, and volume above that is billed per claim processed. This means your costs align naturally with your revenue, busy months cost more because you’re earning more.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Can I use this for new location launches?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Absolutely. When you open a new location, just add it to your ClaimsOpti.AI account. The new shop gets full clerical automation from day one, estimate processing, claims management, document handling, and communications, all without hiring local admin staff.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">What if I still want some human staff handling claims?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">ClaimsOpti.AI works alongside your team, not instead of them. You decide which tasks to automate and which to keep human. Many shops use AI to handle routine processing while their experienced staff focuses on complex claims and customer relationships.</div>
                </details>
            </div>
        </div>
    </section>
    
    
    
    
    <FeatureCrosslinksRelated currentFeatureId="scalable-capacity" />
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">Scale Without Limits.</span><br /><span className="text-green-light">Grow Without Hiring.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">See how ClaimsOpti.AI gives your shop elastic clerical capacity that scales instantly with demand.</p>
            
            <FeatureCrosslinksCta currentFeatureId="scalable-capacity" />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=feature-scale-cta" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">Request a Demo <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="/features" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">Explore All Features</a>
            </div>
        </div>
    </section>
    </>
  )
}
