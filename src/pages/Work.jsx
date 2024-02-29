// import React from 'react'
import savore from "../assets/savore_home.png"
import savoreDashboard from "../assets/dashboard_savore.png"
import barhop from "../assets/barhop.png"
import render from "../assets/render.png"
import "../styling/Work.css"


function Work() {
  return (
    <>
      <div className='my__work'>
            <h4 className='home__header'>My Work</h4>
            <div className="my_work_list">
                <ul className='my__work__container'>
                    <li>
                        <div className='my__work__item'>
                          <img className="work__image__hover" src={savore} alt="render website image"/>
                          <div className='my__header'>Savore</div>
                          <div className="my__design">Design & Development</div>
                          <div className='my__tech'>
                              <div>Restaurant</div>
                          </div>
                        </div>
                        <div className="work__more">
                          <img className="work__image" src={savore} alt="savore website image"/>
                          <img className="work__image__2" src={savoreDashboard} alt="saviore website dashboard"/>
                          <div className='column_grid_3 tech__work'>
                              <p className='tech__bubble'>React</p>
                              <p className='tech__bubble'>PostgreSQL</p>
                              <p className='tech__bubble'>Jest</p>
                              <p className='tech__bubble'>Figma</p>
                              <p className='tech__bubble'>Javascript</p>
                              <p className='tech__bubble'>Node.js</p>
                              <p className='tech__bubble'>Git</p>
                              <p className='tech__bubble'>Ruby on Rails</p>
                          </div>
                          <div className="work__description">
                            <p className="work__description__text">Developed a restaurant reservation platform featuring dynamic routing, API-driven data retrieval, user input handling, and secure user authentication. Rigorous Jest unit tests were implemented for code reliability. The platform seamlessly integrates API requests for efficient user and booking data management, providing a smooth experience for both customers and staff.</p>
                            <p className="work__link">Github</p>
                            <p className="work__link">Live Site</p>
                          </div>
                        </div>
                    </li>
                    <li className='my__work__item'>
                        <img className="work__image__hover" src={barhop} alt="render website image"/>
                        <div className='my__header'>Barhop</div>
                        <div>Design & Development</div>
                        <div className='tech'>
                            <div>Entertainment</div>
                        </div>
                    </li>
                    <li className='my__work__item'>
                        <img className="work__image__hover" src={render} alt="render website image"/>
                        <div className='my__header'>Render</div>
                        <div>Design & Development</div>
                        <div className='tech'>
                            <div>Art</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Work