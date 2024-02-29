// import React from 'react'
import "../styling/Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
        <div className="footer__top">
            <p className="footer__top_head">Looking to work together?</p>
            <Link className="link_container item-right" to="mailto:lorenzomasselli1@gmail.com"><button>Email me</button></Link>
        </div>
        <div className='footer__bottom'>
            <div>
                <p className="footer_heading">Designed in:</p>
                <p className="footer_text">Figma</p>
            </div>
            <div>
                <p className="footer_heading">Built with:</p>
                <p className="footer_text">React & Next.js</p>
            </div>
            <div>
                <p className="footer_heading">Deployed with:</p>
                <p className="footer_text">Vercel</p>
            </div>
            <div>
                <p className="footer_heading">Socials:</p>
                <p className="footer_text footer__socials">
                    <Link className='link_container' target="_blank"  to="https://github.com/LorenzoMasselli"><span className='link' style={{backgroundImage: "linear-gradient(white, white)"}}>Github</span></Link>
                    <Link className='link_container' target="_blank"  to="https://www.linkedin.com/in/lorenzo-masselli-6a1894129/"><span style={{backgroundImage: "linear-gradient(white, white)"}} className='link'>LinkedIn</span></Link>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer