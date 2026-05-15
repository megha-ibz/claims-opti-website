/** Mirrors includes/feature-crosslinks.php */
export const FEATURE_CROSS_ITEMS = {
  'estimate-translation': {
    href: '/features/estimate-translation',
    label: 'Estimate translation',
    blurb:
      'Convert estimates across CCC ONE, Mitchell, and Audatex in seconds, with no re-keying.',
  },
  'claims-automation': {
    href: '/features/claims-automation',
    label: 'Claims automation',
    blurb: 'Submit, track, and follow up on claims with insurers automatically.',
  },
  'document-management': {
    href: '/features/document-management',
    label: 'Document management',
    blurb: 'Upload once; get organized, audit-ready files for every repair.',
  },
  'ai-voice-communication': {
    href: '/features/ai-voice-communication',
    label: 'AI voice & communication',
    blurb: 'Voice, SMS, and email handled by AI, with 24/7 responsiveness.',
  },
  'scalable-capacity': {
    href: '/features/scalable-capacity',
    label: 'Scalable capacity',
    blurb: 'Absorb volume spikes and MSO growth without adding headcount.',
  },
}

export const FEATURE_OVERVIEW_ANCHORS = {
  'estimate-translation': 'estimate-translation',
  'claims-automation': 'claims-automation',
  'document-management': 'document-management',
  'ai-voice-communication': 'ai-voice-agent',
  'scalable-capacity': 'scalable-capacity',
}

export function getOtherFeatures(currentFeatureId) {
  return Object.fromEntries(
    Object.entries(FEATURE_CROSS_ITEMS).filter(([k]) => k !== currentFeatureId)
  )
}

export function overviewHrefFor(currentFeatureId) {
  const h = FEATURE_OVERVIEW_ANCHORS[currentFeatureId]
  return h ? `/features#${h}` : '/features'
}
