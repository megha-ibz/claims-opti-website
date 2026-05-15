import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { AboutBody } from './generated/AboutBody.jsx'

export function AboutPage() {
  usePageMeta(
    'About Us, ClaimsOpti.AI',
    'Learn about ClaimsOpti.AI, an AI-powered collision repair automation platform built by industry experts for body shops and MSO operators across America.'
  )
  return (
    <>
      <Breadcrumb items={[{ href: '/', label: 'Home' }, { label: 'About Us' }]} />
      <AboutBody />
    </>
  )
}
