import { Link } from 'react-router-dom'
import { getOtherFeatures, overviewHrefFor } from '../data/featureCrosslinks.js'

const linkCta = 'font-semibold text-white/90 hover:underline'

export function FeatureCrosslinksCta({ currentFeatureId }) {
  const other = getOtherFeatures(currentFeatureId)
  const onOverview = overviewHrefFor(currentFeatureId)

  return (
    <>
      <p className="mt-4 text-sm text-white/75">
        <Link to="/" className={linkCta}>
          Home
        </Link>
        <span className="text-white/40"> · </span>
        <Link to="/features" className={linkCta}>
          All features
        </Link>
        <span className="text-white/40"> · </span>
        <Link to="/about" className={linkCta}>
          About
        </Link>
        <span className="text-white/40"> · </span>
        <Link to="/contact" className={linkCta}>
          Contact
        </Link>
        <span className="text-white/40"> · </span>
        <Link to={onOverview} className={linkCta}>
          On overview
        </Link>
      </p>
      <p className="mt-2 text-xs text-white/60">
        Also read:{' '}
        {Object.values(other).map((row, i) => (
          <span key={row.href}>
            {i > 0 && <span className="text-white/40"> · </span>}
            <Link to={row.href} className="text-white/80 hover:underline font-medium">
              {row.label}
            </Link>
          </span>
        ))}
      </p>
    </>
  )
}
