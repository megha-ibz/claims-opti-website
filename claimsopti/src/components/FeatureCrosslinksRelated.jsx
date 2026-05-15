import { Link } from 'react-router-dom'
import { getOtherFeatures } from '../data/featureCrosslinks.js'

export function FeatureCrosslinksRelated({ currentFeatureId }) {
  const other = getOtherFeatures(currentFeatureId)

  return (
    <section
      className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100"
      aria-labelledby="related-features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12 reveal">
          <span className="inline-block text-sm font-semibold text-green uppercase tracking-wider mb-2">
            Keep exploring
          </span>
          <h2
            id="related-features-heading"
            className="text-2xl sm:text-3xl font-bold capitalize"
          >
            <span className="text-navy">Related </span>
            <span className="text-green">features</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Other parts of the ClaimsOpti.AI platform that work alongside this one.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {Object.entries(other).map(([id, row]) => (
            <Link
              key={id}
              to={row.href}
              className="group card-hover flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-green/30 hover:shadow-md transition-all reveal"
            >
              <h3 className="text-lg font-bold capitalize">
                {(() => {
                  const p = row.label.indexOf(' ')
                  if (p === -1) {
                    return (
                      <span className="text-navy group-hover:text-green transition-colors">{row.label}</span>
                    )
                  }
                  return (
                    <>
                      <span className="text-navy group-hover:text-green transition-colors">
                        {row.label.slice(0, p)}{' '}
                      </span>
                      <span className="text-green">{row.label.slice(p + 1)}</span>
                    </>
                  )
                })()}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">{row.blurb}</p>
              <span className="mt-4 text-sm font-semibold text-green inline-flex items-center gap-1">
                Learn more
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-10">
          <Link to="/features" className="text-navy font-semibold hover:text-green hover:underline">
            View all features on one page
          </Link>
          <span className="text-gray-300"> · </span>
          <Link to="/" className="text-navy font-semibold hover:text-green hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}
