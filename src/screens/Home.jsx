import React from 'react'
import { Router } from 'react-router-dom'

export default function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Library />} />
        </Routes>
    </Router>
  )
 }
