/* eslint-disable react/no-unknown-property */

export function AboutBody() {
  return (
    <>
    <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/10 text-green text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
                        Our Story
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] capitalize">
                        <span className="text-navy">Built by People Who Understand the </span><span className="text-green">Collision Repair Industry</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        ClaimsOpti.AI was born out of a simple frustration, too much clerical work, too little time, and no software built specifically for body shops.
                    </p>
                </div>
                <div className="reveal reveal-delay-2 relative">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-green/40">
                        <img src="/assets/img/hero-shop.jpg" alt="Modern collision repair shop interior with technicians working on vehicles" className="w-full aspect-video object-cover" loading="eager" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-gray-100 p-4 hidden lg:block">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="text-center"><p className="text-xl font-bold text-navy">10+</p><p className="text-[10px] text-gray-500">Years Experience</p></div>
                            <div className="text-center"><p className="text-xl font-bold text-green">500+</p><p className="text-[10px] text-gray-500">Shops Onboarding</p></div>
                            <div className="text-center"><p className="text-xl font-bold text-navy">50</p><p className="text-[10px] text-gray-500">States Served</p></div>
                            <div className="text-center"><p className="text-xl font-bold text-green">24/7</p><p className="text-[10px] text-gray-500">AI Availability</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">How We Started</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">We saw the problem firsthand. </span><span className="text-green">So we built the solution.</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">
                        We have spent years working with collision repair shops and MSO operators across the US. We saw firsthand how much time, money, and energy gets lost in manual claims processing, estimate translation, and document management.
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                        So we built ClaimsOpti.AI, an AI-powered automation platform designed specifically for the collision repair industry. Not a generic tool. Not a workaround. A purpose-built solution for the way body shops actually work.
                    </p>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="space-y-4">
                        <div className="card-hover bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-navy">The Problem We Saw</p>
                                <p className="text-sm text-gray-600 mt-1">Body shops drowning in paperwork, hours spent on data entry, missed follow-ups, and hiring headaches during peak season.</p>
                            </div>
                        </div>
                        <div className="card-hover bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-navy">The Insight</p>
                                <p className="text-sm text-gray-600 mt-1">No software was built for the way body shops actually work. Everything on the market was generic, retrofitted, or incomplete.</p>
                            </div>
                        </div>
                        <div className="card-hover bg-white rounded-xl border border-gray-100 p-5 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-navy">The Solution</p>
                                <p className="text-sm text-gray-600 mt-1">ClaimsOpti.AI, purpose-built AI automation for collision repair, designed from the ground up for this industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="reveal">
                    <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-4">Our Mission</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug capitalize">
                        <span className="text-white">To eliminate clerical bottlenecks from </span><span className="text-green-light">every collision repair shop in America.</span>
                    </h2>
                    <p className="mt-5 text-gray-300 leading-relaxed text-lg">
                        So owners and operators can focus entirely on quality repairs and growing their business, not managing paperwork, chasing adjusters, or re-keying estimates.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-3xl font-extrabold text-white mb-1">80%</div>
                        <p className="text-sm text-gray-300">Less Clerical Work</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-3xl font-extrabold text-white mb-1">10x</div>
                        <p className="text-sm text-gray-300">Faster Processing</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-3xl font-extrabold text-white mb-1">Zero</div>
                        <p className="text-sm text-gray-300">Missed Follow-ups</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                        <div className="text-3xl font-extrabold text-white mb-1">55%</div>
                        <p className="text-sm text-gray-300">Cost Reduction</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">What Drives Us</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Our Core </span><span className="text-green">Values</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make and every feature we build.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-1">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">Industry </span><span className="text-green">First</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Every feature is designed for collision repair workflows. We don’t adapt generic tools, we build purpose-specific solutions.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-2">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">Accuracy </span><span className="text-green">Always</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">98% processing accuracy. We believe automation should eliminate errors, not create new ones.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-3">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">Shop </span><span className="text-green">Partners</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">We work alongside shop owners and operators. Their feedback directly shapes our roadmap.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 text-center reveal reveal-delay-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-2 capitalize">
                        <span className="text-navy">Continuous </span><span className="text-green">Growth</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Our AI learns and improves with every claim processed, getting smarter and faster over time.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
                <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-3">Why Choose Us</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
                    <span className="text-navy">Why </span><span className="text-green">ClaimsOpti.AI</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Here’s what makes us different from every other tool on the market.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-1">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 capitalize">
                                <span className="text-navy">Built for </span><span className="text-green">Collision Repair</span>
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Not adapted from generic software. Every workflow, integration, and feature is designed for the way body shops and MSOs actually operate.</p>
                        </div>
                    </div>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-2">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 capitalize">
                                <span className="text-green">AI-Powered </span><span className="text-navy">from Day One</span>
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Our AI isn’t bolted on as an afterthought. It’s the core of the platform, powering every automation, decision, and communication.</p>
                        </div>
                    </div>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-3">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 capitalize">
                                <span className="text-navy">MSOs and </span><span className="text-green">Independents Alike</span>
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Whether you run one shop or fifty, ClaimsOpti.AI scales to match. Multi-location management is built right in.</p>
                        </div>
                    </div>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 capitalize">
                                <span className="text-navy">Deep Industry </span><span className="text-green">Expertise</span>
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Backed by a team with 10+ years of hands-on experience in collision repair operations and insurance claims processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 lg:p-12 reveal">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-3">
                        <svg className="w-10 h-10 text-green/30 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                        <blockquote className="text-xl lg:text-2xl text-navy font-medium leading-relaxed">
                            “We went from drowning in paperwork to running like a machine. ClaimsOpti.AI genuinely understands the collision repair business.”
                        </blockquote>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-lg">M</div>
                            <div><p className="font-semibold text-navy">MSO Operator</p><p className="text-sm text-gray-500">Multi-Location Collision Repair Group, AZ</p></div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center"><p className="text-2xl font-extrabold text-navy">285%</p><p className="text-xs text-gray-500 mt-1">Throughput Increase</p></div>
                        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center"><p className="text-2xl font-extrabold text-green">55%</p><p className="text-xs text-gray-500 mt-1">Cost Reduction</p></div>
                        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center"><p className="text-2xl font-extrabold text-navy">80%</p><p className="text-xs text-gray-500 mt-1">Less Clerical Work</p></div>
                        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center"><p className="text-2xl font-extrabold text-green">4.9/5</p><p className="text-xs text-gray-500 mt-1">Satisfaction</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-12 lg:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center reveal">
                <div><p className="text-3xl lg:text-4xl font-extrabold text-navy">10<span className="text-green">+</span></p><p className="text-sm text-gray-500 mt-1">Years Experience</p></div>
                <div><p className="text-3xl lg:text-4xl font-extrabold text-navy">500<span className="text-green">+</span></p><p className="text-sm text-gray-500 mt-1">Shops Onboarding</p></div>
                <div><p className="text-3xl lg:text-4xl font-extrabold text-navy">50K<span className="text-green">+</span></p><p className="text-sm text-gray-500 mt-1">Claims Processed</p></div>
                <div><p className="text-3xl lg:text-4xl font-extrabold text-navy">50</p><p className="text-sm text-gray-500 mt-1">States Served</p></div>
            </div>
        </div>
    </section>
    
    
    
    
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">Want to know more about </span><span className="text-green-light">what we’re building?</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">We’d love to tell you more about our vision for the future of collision repair automation.</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=about" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">Get In Touch <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="/features" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">Explore Features</a>
            </div>
        </div>
    </section>
    </>
  )
}
