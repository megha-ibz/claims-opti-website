/* eslint-disable react/no-unknown-property */

export function FeaturesBody() {
  return (
    <>
    <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/10 text-green text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
                        Platform Capabilities
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] capitalize">
                        <span className="text-navy">Everything Your Shop Needs. </span><span className="text-green">Nothing You Don’t.</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        ClaimsOpti.AI automates every clerical touchpoint in the collision repair lifecycle, built for speed, accuracy, and scale. New here? <a href="/" className="text-navy font-semibold underline decoration-green/30 underline-offset-2 hover:text-green transition-colors">Back to the homepage</a> or <a href="/about" className="text-navy font-semibold underline decoration-green/30 underline-offset-2 hover:text-green transition-colors">read our story</a>.
                    </p>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed">On this page: <a href="#estimate-translation" className="text-green font-medium hover:underline">Estimate</a> · <a href="#claims-automation" className="text-green font-medium hover:underline">Claims</a> · <a href="#document-management" className="text-green font-medium hover:underline">Documents</a> · <a href="#ai-voice-agent" className="text-green font-medium hover:underline">AI voice</a> · <a href="#scalable-capacity" className="text-green font-medium hover:underline">Scale</a></p>
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <a href="/contact?source=features" className="btn-cta inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg">
                            Request a Demo
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </a>
                        <span className="text-sm text-gray-500">No commitment required. <a href="/contact" className="font-medium text-navy hover:text-green transition-colors">Get in touch</a> with questions.</span>
                    </div>
                </div>
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-green/40">
                        <img src="/assets/img/hero-shop.jpg" alt="Modern collision repair shop interior with technicians working on vehicles" className="w-full aspect-video object-cover" loading="eager" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center"><span className="text-sm font-extrabold text-green">5</span></div>
                        <div><p className="text-sm font-semibold text-navy">Core Features</p><p className="text-xs text-gray-400">Built for body shops</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section id="statsStrip" className="py-10 lg:py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="reveal reveal-delay-1"><p className="text-3xl font-extrabold text-navy"><span className="stat-counter" data-target="5">0</span></p><p className="text-sm text-gray-500 mt-1">Core Modules</p></div>
                <div className="reveal reveal-delay-2"><p className="text-3xl font-extrabold text-navy"><span className="stat-counter" data-target="24">0</span><span className="text-green">/7</span></p><p className="text-sm text-gray-500 mt-1">AI Availability</p></div>
                <div className="reveal reveal-delay-3"><p className="text-3xl font-extrabold text-navy"><span className="stat-counter" data-target="98">0</span><span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Processing Accuracy</p></div>
                <div className="reveal reveal-delay-4"><p className="text-3xl font-extrabold text-navy"><span className="stat-counter" data-target="80">0</span><span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Less Clerical Work</p></div>
            </div>
        </div>
    </section>
    
    
    
    
    <section id="estimate-translation" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Feature 01</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Estimate </span><span className="text-green">Translation & Processing</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Instantly translate and process repair estimates across platforms. No manual re-entry. No formatting errors. Just clean, accurate estimates, ready to submit.</p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Works with CCC ONE, Mitchell, and Audatex formats</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Eliminates re-keying errors and formatting mismatches</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Estimates ready for submission in seconds, not hours</span></li>
                    </ul>
                    <div className="mt-8 flex items-center gap-6">
                        <div className="text-center"><p className="text-2xl font-extrabold text-navy">95%</p><p className="text-xs text-gray-500">Faster Processing</p></div>
                        <div className="w-px h-10 bg-gray-200"></div>
                        <div className="text-center"><p className="text-2xl font-extrabold text-navy">Zero</p><p className="text-xs text-gray-500">Re-entry Errors</p></div>
                    </div>
                    <a href="/features/estimate-translation" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full page: estimate translation<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
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
    
    
    
    
    <section id="claims-automation" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal reveal-delay-2 order-2 lg:order-1 relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-green/40">
                        <img src="/assets/img/feature-claims.jpg" alt="Insurance adjuster and shop manager reviewing approved claim" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center"><svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg></div><span className="text-sm font-semibold text-navy">Claims active</span></div>
                        <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">3 approved today</span>
                    </div>
                </div>
                <div className="reveal order-1 lg:order-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider mb-4">Feature 02</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Insurance Claims </span><span className="text-green">Automation</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Submit insurance claims, track status, and manage approvals, all automated. ClaimsOpti.AI follows up so your team doesn’t have to.</p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Automated submission to all major insurance carriers</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Real-time status tracking with automatic escalation</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Intelligent follow-ups that never miss a deadline</span></li>
                    </ul>
                    <div className="mt-8 flex items-center gap-6">
                        <div className="text-center"><p className="text-2xl font-extrabold text-navy">3.2h</p><p className="text-xs text-gray-500">Avg. Cycle Time</p></div>
                        <div className="w-px h-10 bg-gray-200"></div>
                        <div className="text-center"><p className="text-2xl font-extrabold text-navy">100%</p><p className="text-xs text-gray-500">Follow-up Rate</p></div>
                    </div>
                    <a href="/features/claims-automation" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full page: claims automation<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section id="document-management" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Feature 03</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-green">AI-Powered </span><span className="text-navy">Document Management</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Upload an estimate. Download a completed, processed document. It’s that simple. ClaimsOpti.AI handles all documentation in between, organised, accurate, and audit-ready.</p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Upload once, auto-generate all required documents</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Organised, searchable, and fully audit-ready</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Complete paperless workflow from start to finish</span></li>
                    </ul>
                    <a href="/features/document-management" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full page: document management<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
                </div>
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-green/40">
                        <img src="/assets/img/feature-documents.jpg" alt="Auto body shop office with document management system" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg></div><span className="text-sm font-semibold text-navy">3 docs processed</span></div>
                        <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">100% paperless</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section id="ai-voice-agent" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal reveal-delay-2 order-2 lg:order-1 relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-green/40">
                        <img src="/assets/img/feature-voice.jpg" alt="Front desk receptionist managing calls and scheduling in modern auto body shop" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-navy/10 flex items-center justify-center"><svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div><span className="text-sm font-semibold text-navy">AI calls active</span></div>
                        <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">3 completed today</span>
                    </div>
                </div>
                <div className="reveal order-1 lg:order-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold uppercase tracking-wider mb-4">Feature 04</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">AI Voice & </span><span className="text-green">Communication</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Automated follow-ups, status updates, and claim communications, handled by AI. Your shop stays responsive without lifting a finger.</p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">AI voice calls to insurance adjusters and customers</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">SMS and email updates sent automatically</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Full conversation logs for compliance and records</span></li>
                    </ul>
                    <a href="/features/ai-voice-communication" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full page: AI voice & communication<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section id="scalable-capacity" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Feature 05</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Scalable Clerical </span><span className="text-green">Capacity</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Peak season or slow season, ClaimsOpti.AI scales with your workload. Add capacity instantly without adding headcount.</p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Handle 10x claim volume without hiring a single person</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Perfect for MSOs managing multiple locations</span></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-700">Pay for what you use, scales up and down with demand</span></li>
                    </ul>
                    <a href="/features/scalable-capacity" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green hover:underline">Full page: scalable capacity<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
                </div>
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-green/40">
                        <img src="/assets/img/feature-scale.jpg" alt="Large multi-bay collision repair center with multiple technicians working simultaneously" className="w-full aspect-square object-cover" loading="lazy" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><span className="text-xs font-bold text-green">10x</span></div><span className="text-sm font-semibold text-navy">Capacity scaling</span></div>
                        <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">+285% volume</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">How It Works</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Get started in </span><span className="text-green">three simple steps</span>
                </h2>
                <p className="mt-3 text-sm text-gray-500">See how it fits your shop: <a href="/" className="text-green font-medium hover:underline">product overview</a> · <a href="/about" className="text-navy font-medium hover:underline">our mission</a></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center reveal reveal-delay-1">
                    <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5"><span className="text-2xl font-extrabold text-green">1</span></div>
                    <h3 className="text-lg font-bold mb-2 capitalize"><span className="text-navy">Connect </span><span className="text-green">Your Shop</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Integrate with your existing estimating platform, CCC ONE, Mitchell, or Audatex. Setup takes minutes, not weeks.</p>
                </div>
                <div className="text-center reveal reveal-delay-2">
                    <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5"><span className="text-2xl font-extrabold text-green">2</span></div>
                    <h3 className="text-lg font-bold mb-2 capitalize"><span className="text-navy">AI </span><span className="text-green">Takes Over</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">ClaimsOpti.AI begins processing estimates, submitting claims, managing documents, and communicating with insurers automatically.</p>
                </div>
                <div className="text-center reveal reveal-delay-3">
                    <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5"><span className="text-2xl font-extrabold text-green">3</span></div>
                    <h3 className="text-lg font-bold mb-2 capitalize"><span className="text-navy">Focus on </span><span className="text-green">Repairs</span></h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Your team focuses on what matters, quality repairs and customer service. The clerical work handles itself.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">See </span><span className="text-green-light">ClaimsOpti.AI in action.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">Book a personalized demo and see how every feature works for your specific shop setup.</p>
            <p className="mt-4 text-sm text-white/70"><a href="/" className="font-semibold text-white/90 hover:underline">Home</a> &nbsp;·&nbsp; <a href="/about" className="font-semibold text-white/90 hover:underline">About us</a> &nbsp;·&nbsp; <a href="#estimate-translation" className="font-semibold text-white/90 hover:underline">Jump to features</a></p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=features" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">Request a Demo <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="/contact?source=features-contact" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">Talk to Our Team</a>
            </div>
        </div>
    </section>
    </>
  )
}
