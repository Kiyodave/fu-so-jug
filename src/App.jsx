import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Nosotros from './pages/Nosotros'
import Ubicacion from './pages/Ubicacion'
import Contacto from './pages/Contacto'
import './index.css'

function App() {
  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
  )
}

export default App
