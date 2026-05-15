import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FIELDS = {
  full_name: { required: true, minLength: 2, message: 'Please enter your full name (at least 2 characters).' },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address.',
  },
  phone: { required: false, pattern: /^[\d\s+().-]*$/, message: 'Please enter a valid phone number.' },
  shop_name: { required: true, minLength: 2, message: 'Please enter your shop name (at least 2 characters).' },
  message: { required: false, maxLength: 1000, message: 'Message must be under 1000 characters.' },
}

export function ContactForm({ defaultSource = '' }) {
  const navigate = useNavigate()
  const [csrfToken, setCsrfToken] = useState('')
  const [values, setValues] = useState({
    full_name: '',
    email: '',
    phone: '',
    shop_name: '',
    num_locations: '',
    message: '',
    source: defaultSource,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setValues((v) => ({ ...v, source: defaultSource }))
  }, [defaultSource])

  useEffect(() => {
    fetch('/api/csrf-token', { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setCsrfToken(d.csrf_token || ''))
      .catch(() => setCsrfToken(''))
  }, [])

  const validateField = useCallback((name, nextValues) => {
    const rule = FIELDS[name]
    if (!rule) return {}
    const value = (nextValues[name] ?? '').trim()

    if (rule.required && value.length === 0) return { [name]: rule.message }
    if (value.length > 0) {
      if (rule.minLength && value.length < rule.minLength) return { [name]: rule.message }
      if (rule.maxLength && value.length > rule.maxLength) return { [name]: rule.message }
      if (rule.pattern && !rule.pattern.test(value)) return { [name]: rule.message }
    }
    return {}
  }, [])

  const onBlur = (name) => {
    const patch = validateField(name, values)
    setErrors((e) => {
      const next = { ...e }
      if (patch[name]) next[name] = patch[name]
      else delete next[name]
      return next
    })
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = {}
    for (const name of Object.keys(FIELDS)) {
      Object.assign(nextErrors, validateField(name, values))
    }
    setErrors(nextErrors)
    const allValid = Object.keys(nextErrors).length === 0
    if (!allValid) return

    setSubmitting(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          csrf_token: csrfToken,
          full_name: values.full_name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          shop_name: values.shop_name.trim(),
          num_locations: values.num_locations,
          message: values.message.trim(),
          source: values.source.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        navigate('/contact?status=success', { replace: true })
      } else {
        navigate('/contact?status=error', { replace: true })
      }
    } catch {
      navigate('/contact?status=error', { replace: true })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldClass = (name) => {
    let c = 'form-field w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 transition-all duration-200'
    if (errors[name]) c += ' field-error'
    else if (values[name]?.trim()) c += ' field-success'
    return c
  }

  return (
    <form id="contactForm" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="csrf_token" value={csrfToken} readOnly />
      <input type="hidden" name="source" value={values.source} readOnly />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-1">
          <label htmlFor="full_name" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            required
            minLength={2}
            className={fieldClass('full_name')}
            placeholder="John Smith"
            value={values.full_name}
            onChange={onChange}
            onBlur={() => onBlur('full_name')}
          />
          <p id="error-full_name" className="mt-1 text-sm text-red-500" aria-live="polite">
            {errors.full_name || ''}
          </p>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={fieldClass('email')}
            placeholder="john@bodyshop.com"
            value={values.email}
            onChange={onChange}
            onBlur={() => onBlur('email')}
          />
          <p id="error-email" className="mt-1 text-sm text-red-500" aria-live="polite">
            {errors.email || ''}
          </p>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={fieldClass('phone')}
            placeholder="(555) 123-4567"
            value={values.phone}
            onChange={onChange}
            onBlur={() => onBlur('phone')}
          />
          <p id="error-phone" className="mt-1 text-sm text-red-500" aria-live="polite">
            {errors.phone || ''}
          </p>
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="shop_name" className="block text-sm font-semibold text-navy mb-1.5">
            Shop Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="shop_name"
            name="shop_name"
            required
            minLength={2}
            className={fieldClass('shop_name')}
            placeholder="ABC Collision Repair"
            value={values.shop_name}
            onChange={onChange}
            onBlur={() => onBlur('shop_name')}
          />
          <p id="error-shop_name" className="mt-1 text-sm text-red-500" aria-live="polite">
            {errors.shop_name || ''}
          </p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="num_locations" className="block text-sm font-semibold text-navy mb-1.5">
            Number of Locations
          </label>
          <select
            id="num_locations"
            name="num_locations"
            className="form-field w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white transition-all duration-200"
            value={values.num_locations}
            onChange={onChange}
          >
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2-5">2–5</option>
            <option value="6-10">6–10</option>
            <option value="10+">10+</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
            Message / What are you looking to automate?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            className="form-field w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 transition-all duration-200 resize-y"
            placeholder="Tell us about your shop and what you'd like to automate..."
            value={values.message}
            onChange={onChange}
            onBlur={() => onBlur('message')}
          />
          <p id="error-message" className="mt-1 text-sm text-red-500" aria-live="polite">
            {errors.message || ''}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={submitting}
          className="btn-cta w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-green rounded-lg hover:bg-green/90 shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Send Message'}
          {!submitting && (
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          )}
        </button>
      </div>
    </form>
  )
}
