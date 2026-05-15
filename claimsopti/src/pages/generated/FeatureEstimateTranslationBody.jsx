import { FeatureCrosslinksHero } from '../../components/FeatureCrosslinksHero.jsx'
import { FeatureCrosslinksRelated } from '../../components/FeatureCrosslinksRelated.jsx'
import { FeatureCrosslinksCta } from '../../components/FeatureCrosslinksCta.jsx'

/* eslint-disable react/no-unknown-property */

export function FeatureEstimateTranslationBody() {
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
                        <span className="text-navy">Estimate </span><span className="text-green">Translation & Processing</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        Instantly translate and process repair estimates across CCC ONE, Mitchell, and Audatex. No manual re-entry. No formatting errors. Just clean, accurate estimates, ready to submit in seconds. Feeds <a href="/features/claims-automation" className="text-navy font-semibold underline decoration-green/30 hover:text-green">claims automation</a> and <a href="/features/document-management" className="text-navy font-semibold underline decoration-green/30 hover:text-green">document workflows</a> downstream.
                    </p>
                    <FeatureCrosslinksHero currentFeatureId="estimate-translation" />
                    
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <a href="/contact?source=feature-estimate" className="btn-cta inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg">
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
                        <img src="/assets/img/features/feature-hero-estimate.jpg" alt="AI-powered estimate translation dashboard showing data flowing between CCC ONE, Mitchell, and Audatex platforms" className="w-full aspect-video object-cover" loading="eager" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-navy">95% Faster</p>
                            <p className="text-xs text-gray-400">Estimate processing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-10 lg:py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="reveal reveal-delay-1"><p className="text-3xl font-extrabold text-navy">95<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Faster Processing</p></div>
                <div className="reveal reveal-delay-2"><p className="text-3xl font-extrabold text-navy">Zero</p><p className="text-sm text-gray-500 mt-1">Re-entry Errors</p></div>
                <div className="reveal reveal-delay-3"><p className="text-3xl font-extrabold text-navy">3<span className="text-green">+</span></p><p className="text-sm text-gray-500 mt-1">Platforms Supported</p></div>
                <div className="reveal reveal-delay-4"><p className="text-3xl font-extrabold text-navy">15<span className="text-green">hrs</span></p><p className="text-sm text-gray-500 mt-1">Saved Per Week</p></div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">The Problem</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Manual Estimate Translation Is Killing Your </span><span className="text-green">Productivity</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Every collision repair shop knows the pain: an estimate comes in on one platform, but your insurer needs it on another. Your team spends hours re-keying data line by line, VINs, parts, labor rates, paint codes, praying nothing gets lost in translation.</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">The result? Formatting mismatches, rejected submissions, delayed approvals, and frustrated staff who could be doing higher-value work. For MSOs managing multiple locations, the problem multiplies exponentially.</p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl">
                            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div><p className="text-sm font-semibold text-navy">3–4 Hours Daily</p><p className="text-xs text-gray-500">Spent on manual re-entry</p></div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl">
                            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div><p className="text-sm font-semibold text-navy">18% Error Rate</p><p className="text-xs text-gray-500">In manual estimate transfers</p></div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl">
                            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div><p className="text-sm font-semibold text-navy">$2,400/month</p><p className="text-xs text-gray-500">Wasted labor cost per shop</p></div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl">
                            <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div><p className="text-sm font-semibold text-navy">Delayed Approvals</p><p className="text-xs text-gray-500">Due to formatting issues</p></div>
                        </div>
                    </div>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-lg font-bold mb-6 capitalize">
                            <span className="text-navy">The Manual </span><span className="text-green">Workflow</span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-red-500">1</div>
                                <div><p className="text-sm font-medium text-navy">Receive estimate in CCC ONE format</p></div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-red-500">2</div>
                                <div><p className="text-sm font-medium text-navy">Print or screenshot every line item</p></div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-red-500">3</div>
                                <div><p className="text-sm font-medium text-navy">Manually re-key into Mitchell or Audatex</p></div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-red-500">4</div>
                                <div><p className="text-sm font-medium text-navy">Double-check every field for errors</p></div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-white rounded-xl border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-red-500">5</div>
                                <div><p className="text-sm font-medium text-navy">Resubmit when insurer rejects formatting</p></div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-red-500 font-medium text-center">Average time: 45–90 minutes per estimate</p>
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
                    <span className="text-navy">One-Click Estimate </span><span className="text-green">Translation</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">ClaimsOpti.AI reads, interprets, and translates estimates between all major platforms automatically, preserving every data point with 99.8% accuracy. Complements <a href="/features/claims-automation" className="text-green font-semibold hover:underline">insurance claims automation</a> and <a href="/features/scalable-capacity" className="text-navy font-semibold hover:underline">scalable capacity</a> for peak weeks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-1">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Cross-Platform </span><span className="text-green">Translation</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Seamlessly convert estimates between CCC ONE, Mitchell, and Audatex. Every field, VIN, parts, labor, paint codes, sublet items, translates perfectly, preserving your data integrity across platforms.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-2">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Smart Error </span><span className="text-green">Detection</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">AI-powered validation catches discrepancies before submission, mismatched labor rates, incorrect part numbers, and formatting issues that would cause insurer rejections. Fix problems before they happen.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-3">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Instant </span><span className="text-green">Processing</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">What used to take 45–90 minutes now happens in under 30 seconds. Upload your estimate, select the target format, and receive a clean, submission-ready file instantly.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">How It Works</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Three Steps. </span><span className="text-green">Zero Hassle.</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center reveal reveal-delay-1">
                    <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5"><span className="text-2xl font-extrabold text-green">1</span></div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">Upload Your </span><span className="text-green">Estimate</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Drop your estimate file from CCC ONE, Mitchell, or Audatex into ClaimsOpti.AI. We accept all standard formats including EMS, XML, and PDF exports.</p>
                </div>
                <div className="text-center reveal reveal-delay-2">
                    <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5"><span className="text-2xl font-extrabold text-green">2</span></div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-green">AI </span><span className="text-navy">Translates & </span><span className="text-green">Validates</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Our AI engine maps every data field, parts, labor, rates, supplements, to the target platform format. Built-in validation flags any discrepancies before submission.</p>
                </div>
                <div className="text-center reveal reveal-delay-3">
                    <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5"><span className="text-2xl font-extrabold text-green">3</span></div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">Download & </span><span className="text-green">Submit</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Receive a clean, formatted estimate ready for immediate submission. No manual review needed, it’s accurate, complete, and compliant every single time.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Capabilities</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Built for Every </span><span className="text-green">Estimate Scenario</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Whether it’s a simple bumper repair or a complex structural rebuild with supplements, ClaimsOpti.AI handles every estimate type your shop encounters.</p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Full Line-Item Translation</span><p className="text-sm text-gray-500 mt-1">Every part number, labor operation, paint material, and sublet item translates with precision across all three major platforms.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Supplement Handling</span><p className="text-sm text-gray-500 mt-1">Supplements and revisions are tracked and translated separately, maintaining clean audit trails throughout the repair lifecycle.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Rate & Tax Compliance</span><p className="text-sm text-gray-500 mt-1">Automatically applies correct labor rates, tax calculations, and regional pricing based on your shop’s location and insurer agreements.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Photo & Documentation Linking</span><p className="text-sm text-gray-500 mt-1">Repair photos and supporting documentation stay linked to their corresponding line items during translation, nothing gets lost.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Batch Processing</span><p className="text-sm text-gray-500 mt-1">Translate multiple estimates at once. Perfect for MSOs receiving high volumes across different locations and insurer requirements.</p></div></li>
                    </ul>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
                        <h3 className="text-lg font-bold mb-6 capitalize">
                            <span className="text-navy">Supported </span><span className="text-green">Platforms</span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center"><span className="text-sm font-bold text-green">CCC</span></div><span className="text-sm font-semibold text-navy">CCC ONE</span></div>
                                <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">Full Support</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center"><span className="text-xs font-bold text-navy">MIT</span></div><span className="text-sm font-semibold text-navy">Mitchell International</span></div>
                                <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">Full Support</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center"><span className="text-xs font-bold text-green">AUD</span></div><span className="text-sm font-semibold text-navy">Audatex (Solera)</span></div>
                                <span className="text-xs font-semibold text-green bg-green/10 px-2 py-1 rounded-full">Full Support</span>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-green/5 rounded-xl border border-green/20">
                            <p className="text-sm text-gray-600"><span className="font-semibold text-navy">Any-to-any translation:</span> Convert between any combination of the three platforms. CCC &rarr; Mitchell, Audatex &rarr; CCC, Mitchell &rarr; Audatex, all supported.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">Use Cases</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Who Benefits </span><span className="text-green">Most?</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-8">
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 capitalize">
                        <span className="text-navy">Independent Body </span><span className="text-green">Shops</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">You work with multiple insurers who each require different estimating platforms. Instead of maintaining expertise in all three systems, let ClaimsOpti.AI handle the translation while your team focuses on repairs.</p>
                    <p className="text-sm text-green font-semibold">Save 15+ hours per week on estimate processing</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-8">
                    <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 capitalize">
                        <span className="text-navy">MSO / Multi-Shop </span><span className="text-green">Operators</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">Managing estimates across 5, 10, or 50+ locations means dealing with different platform requirements at scale. ClaimsOpti.AI centralizes translation across your entire network with batch processing and standardized output.</p>
                    <p className="text-sm text-green font-semibold">Centralized processing for unlimited locations</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-8">
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 capitalize">
                        <span className="text-navy">DRP </span><span className="text-green">Shops</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">Direct Repair Program shops often need to work exclusively in an insurer’s preferred platform. When you receive referrals with estimates from other systems, instant translation keeps your DRP cycle times on track.</p>
                    <p className="text-sm text-green font-semibold">Meet DRP cycle time requirements effortlessly</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-8">
                    <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5">
                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 capitalize">
                        <span className="text-navy">Third-Party </span><span className="text-green">Administrators</span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">TPAs processing claims across multiple shops and insurers need universal estimate compatibility. ClaimsOpti.AI standardizes estimates from any source into any required output format at scale.</p>
                    <p className="text-sm text-green font-semibold">Handle any format from any shop, instantly</p>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">FAQ</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Common </span><span className="text-green">Questions</span>
                </h2>
            </div>
            <div className="space-y-4 reveal">
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Which estimating platforms do you support?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">ClaimsOpti.AI supports the three major collision repair estimating platforms: CCC ONE, Mitchell International, and Audatex (Solera). We handle any-to-any translations between all three, including all standard export formats (EMS, XML, PDF).</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">How accurate is the translation?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Our translation engine achieves 99.8% field-level accuracy. Every data point, VINs, part numbers, labor operations, paint codes, and pricing, is validated during translation. The built-in error detection catches discrepancies before submission, so you never send an incorrect estimate.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Can it handle supplements and revisions?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Yes. Supplements and estimate revisions are tracked as separate items and translated individually, maintaining a complete audit trail. The system knows the difference between an original estimate, a first supplement, and subsequent revisions.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">How long does a translation take?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">A single estimate translates in under 30 seconds. Batch processing of multiple estimates typically completes within 2–5 minutes regardless of volume. Compare that to 45–90 minutes per estimate with manual re-entry.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Do I need to install any software?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">No. ClaimsOpti.AI is a cloud-based platform accessible from any web browser. There’s no software to install, no servers to maintain, and no IT department needed. Just log in and start translating estimates.</div>
                </details>
            </div>
        </div>
    </section>
    
    
    
    
    <FeatureCrosslinksRelated currentFeatureId="estimate-translation" />
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">Stop Re-Keying Estimates.</span><br /><span className="text-green-light">Start Translating Instantly.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">See how ClaimsOpti.AI eliminates estimate translation headaches and saves your shop 15+ hours every week.</p>
            
            <FeatureCrosslinksCta currentFeatureId="estimate-translation" />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=feature-estimate-cta" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">Request a Demo <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="/features" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">Explore All Features</a>
            </div>
        </div>
    </section>
    </>
  )
}
