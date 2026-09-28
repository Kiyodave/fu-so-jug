import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Nosotros from './pages/Nosotros'
import Ubicacion from './pages/Ubicacion'
import Contacto from './pages/Contacto'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="page-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/"          element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros"  element={<Nosotros />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/contacto"  element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App
