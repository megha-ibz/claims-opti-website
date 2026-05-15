import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { FeaturesBody } from './generated/FeaturesBody.jsx'

export function FeaturesPage() {
  usePageMeta(
    'Features, ClaimsOpti.AI',
    'Explore ClaimsOpti.AI features: estimate translation software, insurance claims automation, document management, AI voice agents, and scalable clerical capacity for body shops.'
  )
  return (
    <>
      <Breadcrumb items={[{ href: '/', label: 'Home' }, { label: 'Features' }]} />
      <FeaturesBody />
    </>
  )
}
