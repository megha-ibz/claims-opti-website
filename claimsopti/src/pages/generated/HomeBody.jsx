/* eslint-disable react/no-unknown-property */

export function HomeBody() {
  return (
    <>
    <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                <div className="reveal">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/10 text-green text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
                        AI-Powered Automation for Body Shops
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.15] capitalize">
                        <span className="text-navy">Auto Body Shop Automation,</span> <span className="text-green">From Estimate to Claim Closure.</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        ClaimsOpti.AI automates <a href="/features/claims-automation" className="text-navy font-medium underline decoration-green/40 underline-offset-2 hover:text-green hover:decoration-green transition-colors">insurance claims processing</a>, <a href="/features/estimate-translation" className="text-navy font-medium underline decoration-green/40 underline-offset-2 hover:text-green hover:decoration-green transition-colors">estimate translation</a>, and <a href="/features/document-management" className="text-navy font-medium underline decoration-green/40 underline-offset-2 hover:text-green hover:decoration-green transition-colors">document workflows</a> for collision repair shops, so your team focuses on repairs, not paperwork.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <a href="/contact?source=homepage" className="btn-cta inline-flex items-center px-7 py-3.5 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg">
                            Request Early Access
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </a>
                        <a href="/features" className="inline-flex items-center text-sm font-semibold text-navy hover:text-green transition-colors gap-2">
                            <svg className="w-8 h-8 p-1.5 rounded-full border-2 border-navy/20" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            See how it works
                        </a>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-3">
                        <div className="flex -space-x-3">
                            <img src="/assets/img/person-mike.jpg" alt="Shop owner" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy" />
                            <img src="/assets/img/person-sarah.jpg" alt="Shop manager" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy" />
                            <img src="/assets/img/person-james.jpg" alt="MSO operator" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy" />
                            <img src="/assets/img/person-linda.jpg" alt="Operations director" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy" />
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-green/10 flex items-center justify-center text-xs font-bold text-green">+500</div>
                        </div>
                        <div>
                            <div className="flex items-center gap-0.5">
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5"><span className="font-semibold text-navy">4.9/5</span> from 500+ shops</p>
                        </div>
                    </div>
                </div>
    
                
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-green/40">
                        <img src="/assets/img/hero-shop.jpg" alt="Modern collision repair shop interior with technicians working on vehicles" className="w-full aspect-square object-cover" loading="eager" />
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-3 hidden lg:flex">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-navy">Claim #4821 Approved</p>
                            <p className="text-xs text-gray-400">Auto-processed 2 min ago</p>
                        </div>
                    </div>
                    <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                            <span className="text-sm font-extrabold text-navy">98%</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-navy">Accuracy Rate</p>
                            <p className="text-xs text-gray-400">Processing precision</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-10 lg:py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Trusted by collision repair shops across America</p>
            <ul className="partner-logos flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 sm:gap-y-6 lg:gap-x-12 list-none p-0 m-0" aria-label="Insurance carriers">
                <li className="partner-logos__cell flex items-center justify-center">
                    <img src="/assets/img/logos/state-farm.svg" alt="State Farm" className="partner-logos__img partner-logos__img--wide" width="160" height="28" loading="lazy" decoding="async" />
                </li>
                <li className="partner-logos__cell flex items-center justify-center">
                    <img src="/assets/img/logos/geico.svg" alt="GEICO" className="partner-logos__img partner-logos__img--wide" width="140" height="28" loading="lazy" decoding="async" />
                </li>
                <li className="partner-logos__cell flex items-center justify-center">
                    <img src="/assets/img/logos/progressive.svg" alt="Progressive" className="partner-logos__img partner-logos__img--wide" width="180" height="28" loading="lazy" decoding="async" />
                </li>
            </ul>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">What We Do</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Why Body Shops Choose </span><span className="text-green">ClaimsOpti.AI</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Everything you need to eliminate clerical bottlenecks, accelerate claim cycles, and scale your shop without adding headcount. <a href="/about" className="text-green font-semibold hover:underline">Read our story</a> or <a href="/features" className="text-navy font-semibold hover:underline">browse every capability</a>.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-1">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize"><span className="text-navy">Claims </span><span className="text-green">Processing</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Submit, track, and close insurance claims without manual intervention. Zero missed follow-ups.</p>
                    <a href="/features/claims-automation" className="mt-4 inline-block text-sm font-semibold text-green hover:underline">Learn more</a>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-2">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize"><span className="text-navy">Scale </span><span className="text-green">Instantly</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Seasonal workload spikes don’t require extra headcount. Scale clerical capacity on demand.</p>
                    <a href="/features/scalable-capacity" className="mt-4 inline-block text-sm font-semibold text-green hover:underline">Learn more</a>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-3">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize"><span className="text-navy">Workflow </span><span className="text-green">Automation</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">From the first estimate to final claim closure, every step handled by AI. Accurately. Every time.</p>
                    <a href="/features/document-management" className="mt-4 inline-block text-sm font-semibold text-green hover:underline">Learn more</a>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize"><span className="text-navy">AI That </span><span className="text-green">Works 24/7</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">No sick days. No delays. No errors. Your AI-powered clerical team is always on.</p>
                    <a href="/features/ai-voice-communication" className="mt-4 inline-block text-sm font-semibold text-green hover:underline">Learn more</a>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Estimate Translation</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Estimate </span><span className="text-green">Translation & Processing</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                        Instantly translate and process repair estimates across platforms. No manual re-entry. No formatting errors. Just clean, accurate estimates, ready to submit.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Cross-platform estimate conversion in seconds</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Eliminate manual data re-entry and formatting errors</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Estimates arrive clean, accurate, and ready to submit</span>
                        </li>
                    </ul>
                    <a href="/features/estimate-translation" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full guide: estimate translation<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
                </div>
                
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-green/40">
                        <img src="/assets/img/feature-estimate.jpg" alt="Technician reviewing repair estimate on tablet in body shop" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></div><span className="text-sm font-semibold text-navy">3 estimates translated</span></div>
                        <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">Live</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                <div className="reveal reveal-delay-2 order-2 lg:order-1 relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-green/40">
                        <img src="/assets/img/feature-voice.jpg" alt="Front desk receptionist managing calls and scheduling in modern auto body shop" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center"><svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg></div>
                            <span className="text-sm font-semibold text-navy">12 claims active</span>
                        </div>
                        <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">3 approved today</span>
                    </div>
                </div>
                
                <div className="reveal order-1 lg:order-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider mb-4">Claims Automation</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Insurance Claims </span><span className="text-green">Automation</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                        Submit insurance claims, track status, and manage approvals, all automated. ClaimsOpti.AI follows up so your team doesn’t have to.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Automated claim submission to all major insurers</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Real-time status tracking and approval management</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">AI-powered follow-ups, zero missed deadlines</span>
                        </li>
                    </ul>
                    <a href="/features/claims-automation" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full guide: claims automation<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Document Management</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-green">AI-Powered </span><span className="text-navy">Document Management</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                        Upload an estimate. Download a completed, processed document. It’s that simple. ClaimsOpti.AI handles all documentation in between, organised, accurate, and audit-ready.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Upload once, auto-generate all required documents</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Organised, searchable, and fully audit-ready</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                            <span className="text-gray-700">Paperless workflow from start to finish</span>
                        </li>
                    </ul>
                    <a href="/features/document-management" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full guide: document management<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
                </div>
                
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-green/40">
                        <img src="/assets/img/feature-documents.jpg" alt="Office desk with document management system and organized repair orders" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg></div>
                            <span className="text-sm font-semibold text-navy">3 documents processed</span>
                        </div>
                        <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">100% paperless</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section id="performanceSection" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">Performance</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Efficiency is our </span><span className="text-green">main priority</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">ClaimsOpti.AI delivers measurable results for every collision repair shop that adopts the platform. <a href="/features/scalable-capacity" className="text-green font-semibold hover:underline">How we scale with your shop</a></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-1">
                    <div className="text-4xl lg:text-5xl font-extrabold text-navy mb-2"><span className="counter" data-target="80" data-decimals="0">0</span><span className="text-green">%</span></div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Reduction in Clerical Hours</p>
                    <div className="mt-4 w-full bg-gray-100 rounded-full h-2"><div className="progress-fill bg-green h-2 rounded-full" data-width="80"></div></div>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-2">
                    <div className="text-4xl lg:text-5xl font-extrabold text-navy mb-2"><span className="counter" data-target="3.2" data-decimals="1">0</span><span className="text-green">h</span></div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Avg. Claim Cycle Time</p>
                    <div className="mt-4 w-full bg-gray-100 rounded-full h-2"><div className="progress-fill bg-navy h-2 rounded-full" data-width="40"></div></div>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-3">
                    <div className="text-4xl lg:text-5xl font-extrabold text-navy mb-2"><span className="counter" data-target="98" data-decimals="0">0</span><span className="text-green">%</span></div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Processing Accuracy</p>
                    <div className="mt-4 w-full bg-gray-100 rounded-full h-2"><div className="progress-fill bg-green h-2 rounded-full" data-width="98"></div></div>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-4">
                    <div className="text-4xl lg:text-5xl font-extrabold text-navy mb-2"><span className="counter" data-target="24" data-decimals="0">0</span><span className="text-green">/7</span></div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">AI Availability</p>
                    <div className="mt-4 w-full bg-gray-100 rounded-full h-2"><div className="progress-fill bg-navy h-2 rounded-full" data-width="100"></div></div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                <div className="reveal">
                    <svg className="w-10 h-10 text-green/40 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed">
                        “ClaimsOpti.AI has been a game changer for our shop. Since adopting their technology, we’ve seen dramatic improvements in our claim processing speed and a massive reduction in clerical errors.”
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                        <img src="/assets/img/person-mike.jpg" alt="Mike R." className="w-14 h-14 rounded-full border-2 border-green/30 object-cover" loading="lazy" />
                        <div>
                            <p className="text-white font-semibold">Mike R.</p>
                            <p className="text-gray-400 text-sm">MSO Operator, 8 Locations, Arizona</p>
                            <div className="flex items-center gap-0.5 mt-1">
                                <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 reveal reveal-delay-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-4xl font-extrabold text-white mb-1">285<span className="text-green">%</span></div>
                        <p className="text-sm text-gray-300">Increase in Claims Throughput</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-4xl font-extrabold text-white mb-1">55<span className="text-green">%</span></div>
                        <p className="text-sm text-gray-300">Reduction in Operating Costs</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-4xl font-extrabold text-white mb-1">Zero</div>
                        <p className="text-sm text-gray-300">Missed Follow-ups</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-4xl font-extrabold text-white mb-1">10x</div>
                        <p className="text-sm text-gray-300">Faster Document Processing</p>
                    </div>
                </div>
            </div>
    
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-0.5 mb-4">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">“We cut our claim processing time by 80%. The estimate translation alone saved us 15 hours a week. I can’t imagine going back to manual.”</p>
                    <div className="flex items-center gap-3">
                        <img src="/assets/img/person-sarah.jpg" alt="Sarah M." className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" loading="lazy" />
                        <div><p className="text-white font-semibold text-sm">Sarah M.</p><p className="text-gray-500 text-xs">Operations Manager, TX</p></div>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-0.5 mb-4">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">“Managing 12 locations used to mean 12 sets of clerical headaches. Now everything runs through one platform. ClaimsOpti.AI genuinely understands the collision repair business.”</p>
                    <div className="flex items-center gap-3">
                        <img src="/assets/img/person-james.jpg" alt="James T." className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" loading="lazy" />
                        <div><p className="text-white font-semibold text-sm">James T.</p><p className="text-gray-500 text-xs">MSO Owner, FL</p></div>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-0.5 mb-4">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">“The AI voice agent is incredible. It handles insurance follow-ups automatically and our front desk finally has time to focus on customers instead of being on hold all day.”</p>
                    <div className="flex items-center gap-3">
                        <img src="/assets/img/person-linda.jpg" alt="Linda K." className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" loading="lazy" />
                        <div><p className="text-white font-semibold text-sm">Linda K.</p><p className="text-gray-500 text-xs">Shop Owner, CA</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">Why Us</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">See what </span><span className="text-green">sets us apart</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">ClaimsOpti.AI isn’t generic software adapted for body shops. It’s purpose-built for the collision repair industry from day one. <a href="/about" className="text-navy font-semibold hover:underline">Meet the team and mission</a>.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-1">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Without ClaimsOpti.AI</h3>
                    <p className="text-navy font-bold text-lg mb-3">Manual Clerical Work</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>Hours of manual data entry</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>Missed follow-ups and deadlines</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>Hiring spikes during busy seasons</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>Error-prone estimate translations</li>
                    </ul>
                </div>
                
                <div className="card-hover bg-white rounded-2xl border-2 border-green p-6 lg:p-8 relative reveal reveal-delay-2">
                    <span className="absolute -top-3 left-6 bg-green text-white text-xs font-bold px-3 py-1 rounded-full">Recommended</span>
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="text-sm font-semibold text-green uppercase tracking-wider mb-2">With ClaimsOpti.AI</h3>
                    <p className="text-navy font-bold text-lg mb-3">Full AI Automation</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>80% less clerical work</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Automated follow-ups, zero misses</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Instant scaling, no extra hires</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>98% accuracy, every time</li>
                    </ul>
                </div>
                
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-3">
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Generic Software</h3>
                    <p className="text-navy font-bold text-lg mb-3">Not Built for Body Shops</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>Adapted from other industries</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>Doesn’t understand collision workflow</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>Requires manual configuration</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>Limited insurer integrations</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 reveal">
                <div className="flex justify-center -space-x-3 mb-5">
                    <img src="/assets/img/person-mike.jpg" alt="Shop owner" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                    <img src="/assets/img/person-sarah.jpg" alt="Shop manager" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                    <img src="/assets/img/person-james.jpg" alt="MSO operator" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                    <img src="/assets/img/person-linda.jpg" alt="Operations director" className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
                    <div className="w-11 h-11 rounded-full border-2 border-white bg-green/10 flex items-center justify-center text-xs font-bold text-green shadow-sm">+496</div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold capitalize">
                    <span className="text-navy">Built for collision repair shops and </span><span className="text-green">MSO operators across the US</span>
                </h2>
                <p className="mt-2 text-gray-500">who are done doing clerical work manually. <a href="/features" className="text-green font-semibold hover:underline">Explore the full platform</a> · <a href="/contact?source=homepage-trust" className="text-navy font-medium hover:underline">Talk to us</a></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal reveal-delay-1">
                <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-navy">500<span className="text-green">+</span></div>
                    <p className="text-sm text-gray-500 mt-1">Shops Onboarding</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-navy">50K<span className="text-green">+</span></div>
                    <p className="text-sm text-gray-500 mt-1">Claims Processed</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-navy">98<span className="text-green">%</span></div>
                    <p className="text-sm text-gray-500 mt-1">Accuracy Rate</p>
                </div>
                <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-extrabold text-navy">4.9<span className="text-green">/5</span></div>
                    <p className="text-sm text-gray-500 mt-1">Satisfaction Score</p>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">Stop managing paperwork.</span><br /><span className="text-green-light">Start growing your shop.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">Join collision repair shops across America who are automating their clerical workflows with ClaimsOpti.AI.</p>
            <p className="mt-4 text-sm text-white/70"><a href="/features" className="font-semibold text-white/90 hover:underline">Compare every feature</a> &nbsp;·&nbsp; <a href="/about" className="font-semibold text-white/90 hover:underline">Why we built this</a></p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=homepage" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">
                    Get Started with ClaimsOpti.AI
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a href="/contact?source=homepage-demo" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">
                    Request a Demo
                </a>
            </div>
        </div>
    </section>
    </>
  )
}
