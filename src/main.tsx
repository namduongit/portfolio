import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/layout'
import Home from './pages/home/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
