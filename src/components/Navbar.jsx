// import React from 'react'
import "../styling/Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav >
      <Link className="link_container" to="/"><span className="item-left" style={{cursor: "pointer"}}>Lorenzo Masselli</span></Link>
      <div className="item-center">
          <Link className="link_container" to="/work"><span className="link">Work</span></Link>
          <Link className="link_container" to="/about"><span className="link">About</span></Link>
      </div>
      <Link className="link_container item-right" to="mailto:lorenzomasselli1@gmail.com"><span  className="link">Let&apos;s Talk</span></Link>
    </nav>
  )
}

export default Navbar