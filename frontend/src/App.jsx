import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {MainPage} from "./Routes.js"
import {WriteUp_0} from "./Routes.js"
import {WriteUp_1} from "./Routes.js"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/writeup0" element={<WriteUp_0 />} />
      <Route path="/writeup1" element={<WriteUp_1 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App