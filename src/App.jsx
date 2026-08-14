import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Skills from './components/Skills'
import Hero from './components/Hero'
import Projetos from './components/Projetos'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
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