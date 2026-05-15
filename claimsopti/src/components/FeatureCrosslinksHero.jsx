import { Link } from 'react-router-dom'
import { getOtherFeatures, overviewHrefFor } from '../data/featureCrosslinks.js'

const linkBase =
  'text-navy font-medium decoration-green/30 hover:text-green hover:underline underline-offset-2'
const linkGreen = 'text-green font-medium hover:underline'

export function FeatureCrosslinksHero({ currentFeatureId }) {
  const other = getOtherFeatures(currentFeatureId)
  const onOverview = overviewHrefFor(currentFeatureId)

  return (
    <>
      <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xl">
        Platform:{' '}
        <Link to="/" className={linkBase}>
          Home
        </Link>{' '}
        ·{' '}
        <Link to="/features" className={linkBase}>
          All features
        </Link>{' '}
        ·{' '}
        <Link to="/about" className={linkBase}>
          About us
        </Link>{' '}
        ·{' '}
        <Link to="/contact" className={linkBase}>
          Contact
        </Link>{' '}
        ·{' '}
        <Link to={onOverview} className={linkGreen}>
          This topic on the overview
        </Link>
      </p>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xl">
        Related capabilities:{' '}
        {Object.values(other).map((row, i) => (
          <span key={row.href}>
            {i > 0 && <span className="text-gray-300"> · </span>}
            <Link to={row.href} className={linkGreen}>
              {row.label}
            </Link>
          </span>
        ))}
      </p>
    </>
  )
}
