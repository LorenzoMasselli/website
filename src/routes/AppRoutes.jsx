// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Work from "../pages/Work"
import About from "../pages/About"

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
  )
}

export default AppRoutes