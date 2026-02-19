import { Routes, Route } from 'react-router-dom'
import Principal from './components/Principal'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Sobre from './pages/Sobre'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
