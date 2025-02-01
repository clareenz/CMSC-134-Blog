import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {NamsTechPage} from "./Routes.js"
const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
      <Route path="/" element={<NamsTechPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App