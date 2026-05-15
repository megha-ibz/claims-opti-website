import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layout/SiteLayout.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPageRoute } from './pages/ContactPageRoute.jsx'
import { FeatureDetailPage } from './pages/FeatureDetailPage.jsx'
import { FeaturesPage } from './pages/FeaturesPage.jsx'
import { HomePage } from './pages/HomePage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPageRoute />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="features/:slug" element={<FeatureDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
