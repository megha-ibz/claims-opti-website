import { FeatureCrosslinksHero } from '../../components/FeatureCrosslinksHero.jsx'
import { FeatureCrosslinksRelated } from '../../components/FeatureCrosslinksRelated.jsx'
import { FeatureCrosslinksCta } from '../../components/FeatureCrosslinksCta.jsx'

/* eslint-disable react/no-unknown-property */

export function FeatureAiVoiceBody() {
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
                        <span className="text-navy">AI Voice & </span><span className="text-green">Communication</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        Automated follow-ups, status updates, and claim communications, handled by AI across voice, SMS, and email. Your shop stays responsive 24/7 without your team picking up a phone. Works on top of <a href="/features/claims-automation" className="text-navy font-semibold underline decoration-green/30 hover:text-green">claims automation</a> and <a href="/features/document-management" className="text-navy font-semibold underline decoration-green/30 hover:text-green">document management</a>.
                    </p>
                    <FeatureCrosslinksHero currentFeatureId="ai-voice-communication" />
                    
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <a href="/contact?source=feature-voice" className="btn-cta inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg">
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
                        <img src="/assets/img/features/feature-hero-voice.jpg" alt="AI voice communication hub with active calls, SMS messaging, and email automation in auto body shop" className="w-full aspect-video object-cover" loading="eager" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-navy">AI Calls Active</p>
                            <p className="text-xs text-gray-400">24/7 communication</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-10 lg:py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="reveal reveal-delay-1"><p className="text-3xl font-extrabold text-navy">24<span className="text-green">/7</span></p><p className="text-sm text-gray-500 mt-1">Communication Coverage</p></div>
                <div className="reveal reveal-delay-2"><p className="text-3xl font-extrabold text-navy">3<span className="text-green">ch</span></p><p className="text-sm text-gray-500 mt-1">Channels (Voice, SMS, Email)</p></div>
                <div className="reveal reveal-delay-3"><p className="text-3xl font-extrabold text-navy">90<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Less Hold Time</p></div>
                <div className="reveal reveal-delay-4"><p className="text-3xl font-extrabold text-navy">100<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Conversation Logged</p></div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">The Problem</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Your Front Desk Is Drowning in </span><span className="text-green">Phone Calls</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Insurance follow-ups. Customer status updates. Adjuster callbacks. Parts order confirmations. Your front desk staff spends more time on the phone than actually helping walk-in customers.</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">The worst part? Much of this communication is repetitive. Status check calls to insurers all follow the same script. Customer update calls relay the same information. Yet each call takes 5–15 minutes when you factor in hold times and transfers.</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">For shops processing 50+ active repairs, that’s 20–30 hours per week tied up in routine communications. Hours that your team could spend on higher-value customer interactions and shop operations.</p>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            </div>
                            <div><p className="font-semibold text-navy">20–30 Hours/Week on Calls</p><p className="text-sm text-gray-500 mt-1">Routine insurance follow-ups and customer status updates consume your team’s entire day.</p></div>
                        </div>
                        <div className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div><p className="font-semibold text-navy">45-min Average Hold Time</p><p className="text-sm text-gray-500 mt-1">Waiting on hold with insurers is one of the biggest time sinks in collision repair.</p></div>
                        </div>
                        <div className="flex items-start gap-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50">
                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                            </div>
                            <div><p className="font-semibold text-navy">Missed Customer Calls</p><p className="text-sm text-gray-500 mt-1">When your staff is on hold with insurers, customer calls go to voicemail, or worse, to a competitor.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">Multi-Channel</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Three Channels. </span><span className="text-green">One AI Brain.</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">ClaimsOpti.AI communicates through the channel that works best for each situation, voice calls, SMS, or email, all powered by the same intelligent AI engine. Ties to <a href="/features/claims-automation" className="text-green font-semibold hover:underline">automated claim follow-ups</a> and <a href="/features/estimate-translation" className="text-navy font-semibold hover:underline">estimate handoffs</a> for consistent messaging.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-1">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">AI Voice </span><span className="text-green">Calls</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Natural-sounding AI voice agents make and receive calls on your behalf. Follow up with insurers, provide customer updates, schedule appointments, and handle routine inquiries, all without human intervention.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Outbound insurer follow-up calls</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Inbound customer call handling</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Appointment scheduling & reminders</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Complete conversation transcripts</li>
                    </ul>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-2">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">SMS </span><span className="text-green">Messaging</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Automated text messages keep customers informed at every stage. Repair status updates, pickup notifications, and appointment confirmations, sent at exactly the right time.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy"></span>Repair stage updates</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy"></span>Pickup-ready notifications</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy"></span>Two-way conversation support</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-navy"></span>Opt-in/opt-out compliance</li>
                    </ul>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-3">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Email </span><span className="text-green">Automation</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">Professional email communications sent automatically to insurers and customers. Claim submissions, documentation delivery, status reports, and follow-up correspondence, all branded with your shop’s identity.</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Branded email templates</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Document delivery with tracking</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Insurer correspondence automation</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green"></span>Customer satisfaction surveys</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Intelligence</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Smarter Than a Script. </span><span className="text-green">More Reliable Than a Person.</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Our AI voice agents don’t just read scripts. They understand context, handle objections, and adapt their communication style based on who they’re talking to.</p>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Natural Language Understanding</span><p className="text-sm text-gray-500 mt-1">AI understands conversational context, not just keywords. It handles questions, objections, and redirects naturally.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Seamless Handoff to Humans</span><p className="text-sm text-gray-500 mt-1">When a conversation requires human judgment, the AI seamlessly transfers to your team with full context.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Full Compliance Logging</span><p className="text-sm text-gray-500 mt-1">Every call, text, and email is logged with complete transcripts for compliance, training, and dispute resolution.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Your Shop’s Voice</span><p className="text-sm text-gray-500 mt-1">The AI is configured with your shop’s name, branding, and communication preferences. Customers won’t know the difference.</p></div></li>
                    </ul>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-lg font-bold mb-6 capitalize">
                            <span className="text-navy">Communication Timeline </span><span className="text-green">Example</span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4"><div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0"></div><div><p className="text-sm font-semibold text-navy">Day 1, Vehicle Drop-off</p><p className="text-xs text-gray-500">SMS: “We’ve received your vehicle. Estimate review in progress.”</p></div></div>
                            <div className="flex gap-4"><div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0"></div><div><p className="text-sm font-semibold text-navy">Day 2, Estimate Approved</p><p className="text-xs text-gray-500">Email: Detailed estimate with timeline. SMS: “Repairs starting tomorrow.”</p></div></div>
                            <div className="flex gap-4"><div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0"></div><div><p className="text-sm font-semibold text-navy">Day 3, Insurer Follow-up</p><p className="text-xs text-gray-500">AI Voice: Calls insurer for supplement approval. Logs outcome.</p></div></div>
                            <div className="flex gap-4"><div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0"></div><div><p className="text-sm font-semibold text-navy">Day 5, Repair Progress</p><p className="text-xs text-gray-500">SMS: “Your vehicle is in paint. Expected completion: Friday.”</p></div></div>
                            <div className="flex gap-4"><div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0"></div><div><p className="text-sm font-semibold text-navy">Day 7, Ready for Pickup</p><p className="text-xs text-gray-500">SMS + Voice: “Your vehicle is ready! Schedule pickup at your convenience.”</p></div></div>
                            <div className="flex gap-4"><div className="w-2 h-2 rounded-full bg-green mt-2 flex-shrink-0"></div><div><p className="text-sm font-semibold text-navy">Day 10, Post-Repair</p><p className="text-xs text-gray-500">Email: Satisfaction survey + warranty information.</p></div></div>
                        </div>
                    </div>
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
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Does the AI voice sound natural?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Yes. Our AI voice agents use the latest neural voice synthesis technology that produces natural, conversational speech. Callers consistently report that they can’t distinguish our AI from a human agent. You can choose from multiple voice profiles and customize the communication style to match your shop’s brand.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">What happens when the AI can’t handle a request?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">The AI knows its limits. When a conversation goes beyond its capabilities, complex disputes, emotional situations, or unusual requests, it seamlessly transfers the call to your team with full context of the conversation so far. You set the rules for when handoffs happen.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Are SMS and email messages TCPA compliant?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Absolutely. All communications are fully TCPA compliant. The system manages opt-in/opt-out preferences, maintains proper consent records, and respects do-not-call lists. We also comply with CAN-SPAM for email communications.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Can I customize the communication templates?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Yes. All SMS templates, email templates, and voice call scripts are fully customizable. You control what gets communicated, when, and how. Start with our proven templates and refine them to match your shop’s voice and customer preferences.</div>
                </details>
            </div>
        </div>
    </section>
    
    
    
    
    <FeatureCrosslinksRelated currentFeatureId="ai-voice-communication" />
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">Let AI Handle the Calls.</span><br /><span className="text-green-light">Free Your Team.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">See how AI-powered voice, SMS, and email automation eliminates phone tag and keeps everyone informed, automatically.</p>
            
            <FeatureCrosslinksCta currentFeatureId="ai-voice-communication" />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=feature-voice-cta" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">Request a Demo <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="/features" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">Explore All Features</a>
            </div>
        </div>
    </section>
    </>
  )
}
