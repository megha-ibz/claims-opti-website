import { FeatureCrosslinksHero } from '../../components/FeatureCrosslinksHero.jsx'
import { FeatureCrosslinksRelated } from '../../components/FeatureCrosslinksRelated.jsx'
import { FeatureCrosslinksCta } from '../../components/FeatureCrosslinksCta.jsx'

/* eslint-disable react/no-unknown-property */

export function FeatureDocumentManagementBody() {
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
                        <span className="text-green">AI-Powered </span><span className="text-navy">Document Management</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        Upload an estimate. Download a completed, processed document. ClaimsOpti.AI handles all documentation in between, organised, accurate, and audit-ready. Go paperless from day one. Connects to <a href="/features/estimate-translation" className="text-navy font-semibold underline decoration-green/30 hover:text-green">estimate translation</a> and <a href="/features/claims-automation" className="text-navy font-semibold underline decoration-green/30 hover:text-green">claims automation</a> for a single workflow.
                    </p>
                    <FeatureCrosslinksHero currentFeatureId="document-management" />
                    
                    <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <a href="/contact?source=feature-documents" className="btn-cta inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg">
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
                        <img src="/assets/img/features/feature-hero-documents.jpg" alt="AI document management system organizing collision repair shop paperwork automatically" className="w-full aspect-video object-cover" loading="eager" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg border border-gray-100 p-3 hidden lg:flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-navy">100% Paperless</p>
                            <p className="text-xs text-gray-400">Fully digital workflow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-10 lg:py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="reveal reveal-delay-1"><p className="text-3xl font-extrabold text-navy">100<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Paperless Workflow</p></div>
                <div className="reveal reveal-delay-2"><p className="text-3xl font-extrabold text-navy">10<span className="text-green">x</span></p><p className="text-sm text-gray-500 mt-1">Faster Document Retrieval</p></div>
                <div className="reveal reveal-delay-3"><p className="text-3xl font-extrabold text-navy">99.9<span className="text-green">%</span></p><p className="text-sm text-gray-500 mt-1">Uptime Guarantee</p></div>
                <div className="reveal reveal-delay-4"><p className="text-3xl font-extrabold text-navy">Audit</p><p className="text-sm text-gray-500 mt-1">Ready at All Times</p></div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">The Problem</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Paper-Based Documentation Is Costing You </span><span className="text-green">More Than You Think</span>
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed text-lg">Filing cabinets overflowing with repair orders. Stacks of printed estimates on every desk. Photos buried in email threads. Authorization forms lost between shifts. Sound familiar?</p>
                    <p className="mt-4 text-gray-600 leading-relaxed">The average body shop generates over 200 documents per week across estimates, repair orders, photos, authorization forms, invoices, and insurer correspondence. Managing this manually means lost documents, failed audits, and hours spent searching for a single file.</p>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 bg-red-50/50 rounded-xl border border-red-100/50 text-center">
                            <p className="text-3xl font-extrabold text-navy">200<span className="text-red-400">+</span></p>
                            <p className="text-xs text-gray-500 mt-1">Docs generated per shop per week</p>
                        </div>
                        <div className="p-5 bg-red-50/50 rounded-xl border border-red-100/50 text-center">
                            <p className="text-3xl font-extrabold text-navy">4.5<span className="text-red-400">hrs</span></p>
                            <p className="text-xs text-gray-500 mt-1">Spent filing & searching weekly</p>
                        </div>
                        <div className="p-5 bg-red-50/50 rounded-xl border border-red-100/50 text-center">
                            <p className="text-3xl font-extrabold text-navy">12<span className="text-red-400">%</span></p>
                            <p className="text-xs text-gray-500 mt-1">Of documents are misfiled</p>
                        </div>
                        <div className="p-5 bg-red-50/50 rounded-xl border border-red-100/50 text-center">
                            <p className="text-3xl font-extrabold text-navy">$18<span className="text-red-400">K</span></p>
                            <p className="text-xs text-gray-500 mt-1">Annual cost of document errors</p>
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
                    <span className="text-navy">Intelligent Document </span><span className="text-green">Automation</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">ClaimsOpti.AI automatically captures, organizes, processes, and stores every document your shop generates, creating a searchable, audit-ready digital archive. Pairs with <a href="/features/claims-automation" className="text-green font-semibold hover:underline">claims automation</a> and <a href="/features/scalable-capacity" className="text-navy font-semibold hover:underline">scalable capacity</a> as volume grows.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-1">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Smart </span><span className="text-green">Upload & Capture</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Upload documents via drag-and-drop, email forwarding, or mobile camera. Our AI automatically identifies document type, extracts key data, and files it to the correct repair order.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-2">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-green">Auto-Generate </span><span className="text-navy">Documents</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">From a single estimate, ClaimsOpti.AI automatically generates all required documents: repair orders, authorization forms, supplement requests, invoices, and insurer correspondence.</p>
                </div>
                <div className="card-hover bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 reveal reveal-delay-3">
                    <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mb-5">
                        <svg className="w-7 h-7 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                    </div>
                    <h3 className="text-lg font-bold mb-3 capitalize">
                        <span className="text-navy">Instant </span><span className="text-green">Search & Retrieval</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Find any document in seconds with full-text search. Search by VIN, customer name, RO number, insurer, date range, or document type. No more digging through filing cabinets.</p>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green/10 text-green text-xs font-semibold uppercase tracking-wider mb-4">Capabilities</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight capitalize">
                        <span className="text-navy">Every Document. Every Repair. </span><span className="text-green">Perfectly Organised.</span>
                    </h2>
                    <ul className="mt-8 space-y-4">
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">OCR & Data Extraction</span><p className="text-sm text-gray-500 mt-1">AI-powered optical character recognition reads scanned documents, extracting VINs, policy numbers, and key data points automatically.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Version Control</span><p className="text-sm text-gray-500 mt-1">Every revision and supplement is tracked. Access complete document history for any repair order with full audit trails.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Secure Cloud Storage</span><p className="text-sm text-gray-500 mt-1">All documents encrypted at rest and in transit. Compliant with data protection standards. Accessible from any device, anywhere.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Automated Compliance</span><p className="text-sm text-gray-500 mt-1">The system flags missing documents for any repair order, ensuring every file is complete before closing out a job.</p></div></li>
                        <li className="flex items-start gap-3"><div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><span className="text-navy font-semibold">Photo Management</span><p className="text-sm text-gray-500 mt-1">Repair photos are automatically tagged, linked to specific line items, and organized chronologically within each repair order.</p></div></li>
                    </ul>
                </div>
                <div className="reveal reveal-delay-2">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-lg font-bold mb-6 capitalize">
                            <span className="text-navy">Document Types We </span><span className="text-green">Handle</span>
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div><span className="text-sm font-medium text-navy">Repair Estimates & Supplements</span></div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div><span className="text-sm font-medium text-navy">Repair Orders (ROs)</span></div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div><span className="text-sm font-medium text-navy">Authorization Forms</span></div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div><span className="text-sm font-medium text-navy">Repair Photos & Damage Documentation</span></div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div><span className="text-sm font-medium text-navy">Invoices & Payment Records</span></div>
                            <div className="flex items-center gap-3 p-3 bg-white rounded-xl"><div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center"><svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div><span className="text-sm font-medium text-navy">Insurer Correspondence & Approvals</span></div>
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
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">Can I migrate my existing documents?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Yes. We offer bulk document migration services. Scan your existing paper files or upload digital archives, and ClaimsOpti.AI will organize, tag, and index everything automatically.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">How secure is document storage?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">All documents are encrypted with 256-bit AES encryption at rest and TLS 1.3 in transit. We maintain SOC 2 Type II compliance, with regular security audits and penetration testing. Your data is backed up with geographic redundancy.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">What file formats are supported?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">We support PDF, JPEG, PNG, TIFF, EMS, XML, DOC/DOCX, XLS/XLSX, and all standard estimating platform export formats. Photos can be uploaded from any device camera.</div>
                </details>
                <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none"><span className="text-base font-semibold text-navy pr-4">How long are documents retained?</span><svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></summary>
                    <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">Documents are retained indefinitely by default. You can configure custom retention policies per document type to comply with your state’s requirements. Deleted documents are purged securely after a 30-day grace period.</div>
                </details>
            </div>
        </div>
    </section>
    
    
    
    
    <FeatureCrosslinksRelated currentFeatureId="document-management" />
    <section className="py-20 lg:py-28 bg-gradient-to-br from-green to-green/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20"></div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20"></div></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight capitalize">
                <span className="text-white">Go Paperless. Go Faster.</span><br /><span className="text-green-light">Go ClaimsOpti.AI.</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto">Eliminate paper-based documentation forever. See how AI-powered document management transforms your shop’s efficiency.</p>
            
            <FeatureCrosslinksCta currentFeatureId="document-management" />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact?source=feature-documents-cta" className="btn-cta inline-flex items-center px-8 py-4 text-base font-semibold text-green bg-white rounded-lg hover:bg-gray-50 shadow-lg">Request a Demo <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
                <a href="/features" className="inline-flex items-center px-6 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors">Explore All Features</a>
            </div>
        </div>
    </section>
    </>
  )
}
