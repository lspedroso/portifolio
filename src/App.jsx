import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Skills from './components/Skills'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter basename="/portifolio">
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/projetos"
          element={<Projetos />}
        />

      </Routes>
    </BrowserRouter>
  )
}