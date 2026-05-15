import { FeatureCrosslinksHero } from '../../components/FeatureCrosslinksHero.jsx'
import { FeatureCrosslinksRelated } from '../../components/FeatureCrosslinksRelated.jsx'
import { FeatureCrosslinksCta } from '../../components/FeatureCrosslinksCta.jsx'

/* eslint-disable react/no-unknown-property */

export function FeatureClaimsAutomationBody() {
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
                        <span className="text-navy">Insurance Claims </span><span className="text-green">Automation</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        Submit, track, and manage insurance claims from start to finish, fully automated. AI-powered follow-ups ensure nothing slips through the cracks. Your team never chases an adjuster again. Pairs with <a href="/features/estimate-translation" className="text-navy font-semibold underline decoration-green/30 hover:text-green">estimate translation</a> and <a href="/features/ai-voice-communication" className="text-navy font-semibold underline decoration-green/30 hover:text-green">AI voice & communication</a> for the full stack.
                    </p>
                    <FeatureCrosslinksHero currentFeatureId="claims-automation" />
                    
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <a href="/contact?source=feature-claims" className="btn-cta inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg">
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
                        <img src="/assets/img/features/feature-hero-claims.jpg" alt="Insurance claims automation dashboard showing active claims pipeline with status tracking" className="w-full aspect-video object-cover" loading="eager" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-navy">100% Follow-up Rate</p>
                            <p className="text-xs text-gray-400">Zero missed deadlines</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-10 lg:py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="reveal reveal-delay-1"><p className="text-3xl font-extrabold text-navy">3.2<span className="text-green">h</span></p><p className="text-sm text-gray-500 mt-1">Avg. Cycle Time</p></div>
                <div className="reveal reveal-delay-2"><p className="text-3xl font-extrabold text-navy">100<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Follow-up Rate</p></div>
                <div className="reveal reveal-delay-3"><p className="text-3xl font-extrabold text-navy">285<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Throughput Increase</p></div>
                <div className="reveal reveal-delay-4"><p className="text-3xl font-extrabold text-navy">Zero</p><p className="text-sm text-gray-500 mt-1">Missed Deadlines</p></div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">The Problem</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Claims Management Shouldn’t Be a </span><span className="text-green">Full-Time Job</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">For most collision repair shops, managing insurance claims is a manual, time-consuming nightmare. Your front desk staff spends hours on hold with adjusters, manually tracking claim statuses in spreadsheets, and chasing approvals that should have come days ago.</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">Missed follow-ups lead to delayed payments. Delayed payments lead to cash flow problems. Cash flow problems kill body shops. It’s a cycle that doesn’t have to exist.</p>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div><p className="font-semibold text-navy">Hours Spent on Hold</p><p className="text-sm text-gray-500 mt-1">Your team wastes 2–3 hours daily calling insurers for status updates, approvals, and supplement authorization.</p></div>
                        </div>
                        <div className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                            </div>
                            <div><p className="font-semibold text-navy">Missed Follow-ups</p><p className="text-sm text-gray-500 mt-1">When you’re juggling 30+ active claims, follow-ups fall through the cracks. Each missed follow-up adds days to your payment cycle.</p></div>
                        </div>
                        <div className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div><p className="font-semibold text-navy">Cash Flow Impact</p><p className="text-sm text-gray-500 mt-1">Average payment delay of 15–30 days due to manual claim tracking. For shops processing 100+ claims per month, that’s significant revenue sitting idle.</p></div>
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
                    <span className="text-navy">End-to-End Claims </span><span className="text-green">Automation</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">ClaimsOpti.AI manages the entire claims lifecycle, from initial submission to final payment, with intelligent automation that never forgets a follow-up. Together with <a href="/features/document-management" className="text-green font-semibold hover:underline">document management</a> and <a href="/features/estimate-translation" className="text-navy font-semibold hover:underline">estimate translation</a>, your paperwork stays connected end to end.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 text-center reveal reveal-delay-1">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                    </div>
                    <h3 className="text-base font-bold mb-2 capitalize">
                        <span className="text-navy">Auto-</span><span className="text-green">Submit</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Claims submitted to insurers automatically with all required documentation attached and formatted correctly.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 text-center reveal reveal-delay-2">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    </div>
                    <h3 className="text-base font-bold mb-2 capitalize">
                        <span className="text-navy">Real-Time </span><span className="text-green">Tracking</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Live status updates for every claim. Know exactly where each one stands without making a single phone call.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 text-center reveal reveal-delay-3">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                    </div>
                    <h3 className="text-base font-bold mb-2 capitalize">
                        <span className="text-navy">Smart </span><span className="text-green">Follow-ups</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">AI determines the optimal follow-up schedule and escalation path for every claim based on insurer and claim type.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 text-center reveal reveal-delay-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    </div>
                    <h3 className="text-base font-bold mb-2 capitalize">
                        <span className="text-navy">Analytics </span><span className="text-green">Dashboard</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Track approval rates, cycle times, and payment velocity by insurer. Identify bottlenecks and optimize your claims process.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">How It Works</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Automated From Submission to </span><span className="text-green">Payment</span>
                </h2>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-0 reveal">
                    <div className="flex gap-6 items-start pb-10 relative">
                        <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-xl bg-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div><div className="w-0.5 bg-green/20 flex-1 mt-2"></div></div>
                        <div className="pb-2"><h3 className="text-lg font-bold capitalize"><span className="text-navy">Claim Created </span><span className="text-green">Automatically</span></h3><p className="mt-2 text-gray-600 leading-relaxed">When a repair order is created or an estimate is approved, ClaimsOpti.AI automatically generates the corresponding insurance claim with all required fields populated. No manual entry needed.</p></div>
                    </div>
                    <div className="flex gap-6 items-start pb-10 relative">
                        <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-xl bg-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div><div className="w-0.5 bg-green/20 flex-1 mt-2"></div></div>
                        <div className="pb-2"><h3 className="text-lg font-bold capitalize"><span className="text-navy">Documentation </span><span className="text-green">Packaged & Submitted</span></h3><p className="mt-2 text-gray-600 leading-relaxed">All supporting documents, estimates, photos, authorization forms, are automatically compiled and submitted to the insurer in their required format. Each carrier’s specific requirements are pre-configured.</p></div>
                    </div>
                    <div className="flex gap-6 items-start pb-10 relative">
                        <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-xl bg-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div><div className="w-0.5 bg-green/20 flex-1 mt-2"></div></div>
                        <div className="pb-2"><h3 className="text-lg font-bold capitalize"><span className="text-navy">Real-Time Status </span><span className="text-green">Monitoring</span></h3><p className="mt-2 text-gray-600 leading-relaxed">Every claim is tracked in real time. Status changes, received, in review, additional info requested, approved, payment processing, are updated automatically and visible in your dashboard.</p></div>
                    </div>
                    <div className="flex gap-6 items-start pb-10 relative">
                        <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-xl bg-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div><div className="w-0.5 bg-green/20 flex-1 mt-2"></div></div>
                        <div className="pb-2"><h3 className="text-lg font-bold capitalize"><span className="text-navy">Intelligent Follow-up </span><span className="text-green">Engine</span></h3><p className="mt-2 text-gray-600 leading-relaxed">When a claim stalls, ClaimsOpti.AI automatically follows up with the insurer. The system learns optimal timing and escalation paths for each carrier, adjusting follow-up frequency based on response patterns.</p></div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="flex flex-col items-center"><div className="w-12 h-12 rounded-xl bg-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">5</div></div>
                        <div><h3 className="text-lg font-bold capitalize"><span className="text-navy">Approval & Payment </span><span className="text-green">Tracking</span></h3><p className="mt-2 text-gray-600 leading-relaxed">Once approved, payment status is tracked automatically. You’ll know exactly when to expect payment and can identify any claims where payment is overdue, with automated escalation triggers.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal reveal-delay-2 order-2 lg:order-1">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
                        <h3 className="text-lg font-bold mb-6 capitalize">
                            <span className="text-navy">Insurer </span><span className="text-green">Coverage</span>
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">State Farm</span></div>
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">GEICO</span></div>
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">Progressive</span></div>
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">Allstate</span></div>
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">USAA</span></div>
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">Liberty Mutual</span></div>
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">Farmers</span></div>
                            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"><div className="w-2 h-2 rounded-full bg-green"></div><span className="text-sm font-medium text-navy">Nationwide</span></div>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 text-center">+ 50 more regional and specialty carriers</p>
                    </div>
                </div>
                <div className="reveal order-1 lg:order-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Capabilities</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Works with Every Major </span><span className="text-green">Insurer</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">ClaimsOpti.AI comes pre-configured with submission requirements for all major insurance carriers. Each insurer’s specific documentation requirements, preferred formats, and follow-up protocols are built in.</p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Carrier-Specific Formatting</span><p className="text-sm text-gray-500 mt-1">Each insurer receives claims in their exact preferred format, reducing rejections.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Supplement Management</span><p className="text-sm text-gray-500 mt-1">Supplements are submitted, tracked, and followed up automatically as part of the original claim.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Dispute Resolution Support</span><p className="text-sm text-gray-500 mt-1">When claims are disputed, ClaimsOpti.AI compiles supporting evidence and initiates appeal processes.</p></div></li>
                    </ul>
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
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Which insurance carriers do you support?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">ClaimsOpti.AI supports all major carriers including State Farm, GEICO, Progressive, Allstate, USAA, Liberty Mutual, Farmers, Nationwide, and 50+ regional carriers. If your insurer isn’t already configured, we’ll add them within 48 hours.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">How does the automated follow-up system work?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Our AI engine monitors every active claim and determines the optimal follow-up timing based on carrier-specific patterns. When a claim hasn’t progressed within expected timeframes, the system automatically initiates follow-up communications via the carrier’s preferred channel. It escalates to supervisors when standard follow-ups are ineffective.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">What happens when a claim is disputed?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">When an insurer disputes a claim or requests additional information, ClaimsOpti.AI alerts your team and compiles relevant supporting evidence. For common dispute types, the system can auto-generate response packages with the documentation needed to resolve the issue.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Can I track claim performance by insurer?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Yes. The analytics dashboard provides detailed breakdowns by insurer, including average cycle time, approval rate, dispute frequency, and payment velocity. This data helps you identify which insurers are performing well and which need attention.</div>
                </details>
            </div>
        </div>
    </section>
    
    
    
    
    <FeatureCrosslinksRelated currentFeatureId="claims-automation" />
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">Never Chase an </span><span className="text-green-light">Adjuster Again.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">Let ClaimsOpti.AI handle your insurance claims from submission to payment, automatically.</p>
            
            <FeatureCrosslinksCta currentFeatureId="claims-automation" />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=feature-claims-cta" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">Request a Demo <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="/features" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">Explore All Features</a>
            </div>
        </div>
    </section>
    </>
  )
}
