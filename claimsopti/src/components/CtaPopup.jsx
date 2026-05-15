import { Link } from 'react-router-dom'

export function CtaPopup() {
  return (
    <div
      id="ctaPopup"
      className="cta-popup fixed inset-0 z-[100] hidden p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ctaPopupTitle"
      aria-hidden="true"
      aria-describedby="ctaPopupDesc"
    >
      <div className="cta-popup__overlay absolute inset-0 bg-navy/55 backdrop-blur-sm" data-cta-close />
      <div className="cta-popup__panel relative z-10 w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-green">Early access</span>
            <h2 id="ctaPopupTitle" className="mt-2 text-xl font-extrabold leading-tight text-navy sm:text-2xl">
              Automate claims, not your weekend.
            </h2>
            <p id="ctaPopupDesc" className="mt-3 text-sm leading-relaxed text-gray-600">
              Join the list for ClaimsOpti.AI, cut clerical hours, speed up claim cycles, and keep your team on the tools.
            </p>
          </div>
          <button
            type="button"
            className="cta-popup__close -mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-navy"
            data-cta-close
            aria-label="Close this dialog"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
          <Link
            id="ctaPopupLink"
            to="/contact?source=popup-cta"
            className="btn-cta inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green px-6 py-3.5 text-sm font-semibold text-white sm:w-auto"
          >
            Request early access
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <button
            type="button"
            className="text-center text-sm font-semibold text-gray-500 hover:text-navy sm:min-w-[5rem] sm:py-2"
            data-cta-close
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  )
}
