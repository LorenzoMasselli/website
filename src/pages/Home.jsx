// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import "../styling/Home.css"
import icon from "../assets/icon.png"
import wikinimous from "../assets/wikinimous.png"
import barhop from "../assets/barhop.png"
import render from "../assets/render.png"
import savore from "../assets/savore_home.png"
import savoreVideo from "../assets/savore_video.mov"

function Home() {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        const rotationAngle = window.scrollY; 
        document.querySelector('.landing__work').style.transform = `rotate(${rotationAngle/1.5}deg)`;

        const maxTransform = -260;
        const minTransform = -20;
        const startTransform = -120;
        let transformValue = startTransform - (scrollY/12 );
        if (transformValue < maxTransform) {
            transformValue = maxTransform;
          }
        if (transformValue > minTransform) {
            transformValue = minTransform;
        }
          document.querySelector('.mockup_image_container').style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${transformValue}, 0, 0, 1)`;
      }

    //   const handleMouseMove = (e) => {
    //     const image = e.target;
    //     const rect = image.getBoundingClientRect();
    //     const offsetX = e.clientX - rect.left;
    //     const moveX = (offsetX - rect.width / 2) / 10; // Adjust the division value for sensitivity
    //     image.style.left = `${moveX}%`;
    // };

    // const handleMouseLeave = (e) => {
    //     e.target.style.transform = 'translate(0, 0)';
    // };

  return (
    <>
        <div className="home">
            <div className="flex_text">
                <h5 className="landing_header">Web Developer <img className="landing__work" src={icon} alt="icon" /></h5>
                <p className="landing_text">I craft ambitious web apps delivering performant & powerful digital experiences.</p>
            </div>
            <div className="landing_bottom">
                <div>
                    <Link className='link_container' target="_blank"  to="https://github.com/LorenzoMasselli"><p className='link new'>Github</p></Link>
                    <Link className='link_container' target="_blank"  to="https://www.linkedin.com/in/lorenzo-masselli-6a1894129/"><p className='link new'>LinkedIn</p></Link>
                </div>
                <div>
                    <p>London</p>
                </div>
            </div>
        </div>
        <div className='home__mockup'>
            <div className='mockup_image_container'>
                <img className="mockup__image" src={render} alt="render website image"/>
                <video className="mockup__video" src={savoreVideo} alt="savore website video" autoPlay loop muted />
                <img className="mockup__image" src={barhop} alt="barhop website image"/>
                <img className="mockup__image" src={wikinimous} alt="wikinimous website image"/>
            </div>

        </div>
        <div className='horizontal-line-container'><div className='horizontal-line'></div></div>
        <div className='home__about'>
            <h4 className='home__header'>About me</h4>
            <p className='about__text'>As a multifaceted web developer with a background in economics and management, I bring a unique blend of strategic decision-making and full-stack development expertise, honed through professional sports, business analysis and my studies, to create impactful web solutions in agile environments.</p>
        </div>
        <div className='recent_work'>
            <h4 className='home__header'>Recent work</h4>
            <div className="recent_work_list">
                <ul className='recent__work__container'>
                    <li className='recent__work__item'>
                        <img className="work__image__hover" src={savore} alt="render website image"/>
                        <div className='recent__header'>Savore</div>
                        <div>Design & Development</div>
                        <div className='tech'>
                            <div>Restaurant</div>
                        </div>
                    </li>
                    <li className='recent__work__item'>
                        <img className="work__image__hover" src={barhop} alt="render website image"/>
                        <div className='recent__header'>Barhop</div>
                        <div>Design & Development</div>
                        <div className='tech'>
                            <div>Entertainment</div>
                        </div>
                    </li>
                    <li className='recent__work__item'>
                        <img className="work__image__hover" src={render} alt="render website image"/>
                        <div className='recent__header'>Render</div>
                        <div>Design & Development</div>
                        <div className='tech'>
                            <div>Art</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='home__skills'>
            <h4 className='home__header'>Key Skills</h4>
            <div className='column_grid_3'>
                <p className='tech__bubble'>React</p>
                <p className='tech__bubble'>Typescript</p>
                <p className='tech__bubble'>SQL</p>
                <p className='tech__bubble'>Ruby</p>
                <p className='tech__bubble'>Javascript</p>
                <p className='tech__bubble'>Jest</p>
                <p className='tech__bubble'>Figma</p>
                <p className='tech__bubble'>Node.js</p>
                <p className='tech__bubble'>Git</p>
            </div>
        </div>
    </>
  )
}

export default Home