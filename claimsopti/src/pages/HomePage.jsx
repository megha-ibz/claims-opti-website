import { usePageMeta } from '../hooks/usePageMeta.js'
import { HomeBody } from './generated/HomeBody.jsx'

export function HomePage() {
  usePageMeta(
    'Auto Body Shop Automation, ClaimsOpti.AI',
    'ClaimsOpti.AI automates insurance claims processing, estimate translation, and clerical workflows for collision repair shops and MSO operators.'
  )
  return <HomeBody />
}
