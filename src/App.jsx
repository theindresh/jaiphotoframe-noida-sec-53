import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { FrameProvider } from './context/FrameContext'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionsPage'
import CustomFramePage from './pages/CustomFramePage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  return (
    <FrameProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="custom-frame" element={<CustomFramePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </FrameProvider>
  )
}
