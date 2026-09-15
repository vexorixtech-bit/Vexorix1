import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WebDevelopment from './pages/services/WebDevelopment'
import ServiceDetail from './pages/services/ServiceDetail'
import { services } from './data/services'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        {services
          .filter(s => s.path !== '/services/web-development')
          .map(s => (
            <Route key={s.path} path={s.path} element={<ServiceDetail service={s} />} />
          ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}