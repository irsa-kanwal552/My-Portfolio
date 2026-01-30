import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
// Other page imports removed as they are now children of Home
// import About from './pages/About.jsx'
// import Projects from './pages/Projects.jsx'
// import Contact from './pages/Contact.jsx'
// import Skills from './pages/Skills.jsx'
// import Experience from './pages/Experience.jsx'
import BackgroundAnimation from './components/BackgroundAnimation.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'



function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-gray-200 selection:bg-cyan-500/30 relative">
      <BackgroundAnimation />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
        </Routes>
      </AnimatePresence>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
