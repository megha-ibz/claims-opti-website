import { usePageMeta } from '../hooks/usePageMeta.js'
import { ContactPage as ContactContent } from './ContactPage.jsx'

export function ContactPageRoute() {
  usePageMeta(
    'Contact Us, ClaimsOpti.AI',
    'Get in touch with ClaimsOpti.AI. Request a demo or learn how our AI-powered automation platform can transform your collision repair shop operations.'
  )
  return <ContactContent />
}
