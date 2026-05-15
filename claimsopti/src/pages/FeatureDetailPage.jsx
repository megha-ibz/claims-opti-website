import { Navigate, useParams } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'
import { FeatureAiVoiceBody } from './generated/FeatureAiVoiceBody.jsx'
import { FeatureClaimsAutomationBody } from './generated/FeatureClaimsAutomationBody.jsx'
import { FeatureDocumentManagementBody } from './generated/FeatureDocumentManagementBody.jsx'
import { FeatureEstimateTranslationBody } from './generated/FeatureEstimateTranslationBody.jsx'
import { FeatureScalableCapacityBody } from './generated/FeatureScalableCapacityBody.jsx'

const SLUG_CONFIG = {
  'estimate-translation': {
    Component: FeatureEstimateTranslationBody,
    title: 'Estimate Translation Software, ClaimsOpti.AI',
    description:
      'Convert repair estimates between CCC ONE, Mitchell, and Audatex automatically. Eliminate manual re-entry and formatting errors for collision repair shops.',
    crumb: 'Estimate Translation',
  },
  'claims-automation': {
    Component: FeatureClaimsAutomationBody,
    title: 'Insurance Claims Automation, ClaimsOpti.AI',
    description:
      'Automate insurance claims submission, tracking, and approvals for your collision repair shop. AI-powered follow-ups ensure zero missed deadlines.',
    crumb: 'Claims Automation',
  },
  'document-management': {
    Component: FeatureDocumentManagementBody,
    title: 'AI Document Management, ClaimsOpti.AI',
    description:
      'AI-powered document capture, organization, and audit-ready storage for collision repair shops. Upload once, auto-generate every required form.',
    crumb: 'Document Management',
  },
  'ai-voice-communication': {
    Component: FeatureAiVoiceBody,
    title: 'AI Voice & SMS for Body Shops, ClaimsOpti.AI',
    description:
      'Automated voice calls, SMS, and email for insurance follow-ups and customer updates. Your AI clerical team never misses a message.',
    crumb: 'AI Voice & Communication',
  },
  'scalable-capacity': {
    Component: FeatureScalableCapacityBody,
    title: 'Scalable Clerical Capacity, ClaimsOpti.AI',
    description:
      'Scale clerical throughput for MSOs and peak season without hiring. Elastic AI capacity absorbs 10x volume spikes for collision repair shops.',
    crumb: 'Scalable Capacity',
  },
}

export function FeatureDetailPage() {
  const { slug } = useParams()
  const cfg = SLUG_CONFIG[slug || '']

  usePageMeta(
    cfg?.title ?? 'Features, ClaimsOpti.AI',
    cfg?.description ?? SLUG_CONFIG['estimate-translation'].description
  )

  if (!cfg) {
    return <Navigate to="/features" replace />
  }

  const { Component } = cfg

  return (
    <>
      <Breadcrumb
        items={[
          { href: '/', label: 'Home' },
          { href: '/features', label: 'Features' },
          { label: cfg.crumb },
        ]}
      />
      <Component />
    </>
  )
}
