import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  return (
    <Router>
      <SpeedInsights />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
