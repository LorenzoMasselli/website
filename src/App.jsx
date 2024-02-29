import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/Footer"

function App() {

  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
