// import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import savore from "../assets/savore_home.png"
import savoreDashboard from "../assets/dashboard_savore.png"
import savoreCalendar from "../assets/savore_calendar.png"
import wikinimous from "../assets/wikinimous.png"
import barhopCrawl from "../assets/barhop_crawl.png"
import barhop from "../assets/barhop.png"
import render from "../assets/render.png"
import renderForm from "../assets/render_form.png"
import "../styling/Work.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function Work() {
const [collapsedItems, setCollapsedItems] = useState("");

  const workInfo = {
    1: {
      image: [render, renderForm],
      heading: "Render",
      subHeading: "Design & Development",
      industry: "Art",
      description: "Contributed to the development of a peer-to-peer web application that allows users to rent and share artworks with others, with a focus on making art accessible to everyone.",
      github: "Github",
      website: "",
      tech: ["Ruby on Rails", "Javascript", "PostgreSQL", "Figma"],
      githubLink: "https://github.com/AlekP141/Render",
      websiteLink: "",
    },
    2: {
      image: [savoreDashboard, savore, savoreCalendar ],
      heading: "Savore",
      subHeading: "Design & Development",
      industry: "Restaurant",
      description: "Developed a restaurant reservation platform featuring dynamic routing, API-driven data retrieval, user input handling, and secure user authentication. Rigorous Jest unit tests were implemented for code reliability. The platform seamlessly integrates API requests for efficient user and booking data management, providing a smooth experience for both customers and staff.",
      github: "Github",
      website: "Website",
      tech: ["React", "Node.js", "Ruby on Rails", "PostgreSQL", "Jest"],
      githubLink: "https://github.com/LorenzoMasselli/react-rails-restaurant-frontend",
      websiteLink: "https://lorenzomasselli.github.io/react-rails-restaurant-frontend/",
  
    },
    3: {
      image: [barhop, barhopCrawl],
      heading: "Barhop",
      subHeading: "Design & Development",
      industry: "Entertainment",
      description: "Contributed to the development of BarHop, a web application that generates curated bar crawl routes based on user preferences like venue type, price, and the number of bars. Integrated external Restful APIs for real-time access to comprehensive bar venue data, enhancing the user experience.",
      github: "Github",
      website: "",
      tech: ["Ruby on Rails", "Javascript", "PostgreSQL", "Figma"],
      githubLink: "https://github.com/dyloff/barhop",
      websiteLink: "",
    },
    4: {
      image: [wikinimous],
      heading: "Wikinimous",
      subHeading: "Design & Development",
      industry: "Encyclopedia",
      description: "I built a wiki website where volunteers can create and update articles for people to read. An online encyclopedia of information.",
      github: "Github",
      website: "",
      tech: ["Ruby on Rails", "Javascript", "Bootstrap"],
      githubLink: "https://github.com/LorenzoMasselli/rails-wikinimous",
      websiteLink: "",
    },

  }

  const handleCollapseToggle = (id) => {
    const item = document.getElementById(id)
    const allCollapsed = document.querySelectorAll(".collapsed")
    allCollapsed.forEach((collapsedItem) => {
      if (collapsedItem !== item) {
        collapsedItem.classList.remove('collapsed');
      }
    });
    if (item.classList.contains("collapsed")) {
      setCollapsedItems("")
    } else {
  
      setCollapsedItems(id)
    }
    item.classList.toggle('collapsed');
  }

  return (
    <>
      <div className='work'>
            <h4 className='work__subheader'>From ideation to deployment, I turn web app ideas into reality through innovative design and development</h4>
            <h4 className='work__header'>My Work</h4>
            <div className="work__container">
                <ul className='work__list'>
                  {Object.values(workInfo).map((work, i) => (
                    <li key={work.heading} className='work__item'>
                      <div className="work__collapsable" onClick={() => handleCollapseToggle(i)}>
                        <h5 className="work__list__item__head">{work.heading}</h5>
                        <h5 className="work__list__item__subhead">{work.subHeading}</h5>
                        <h5 className="work__list__item__industry">{work.industry}</h5>
                        <span className="chevron__down"><FontAwesomeIcon style={{
                        transform: collapsedItems === i
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }} icon={faChevronDown} /></span>
                      </div>
                      <div className="work__collapsed" id={i}>
                        <img className="work__image" src={work.image[0]} alt={work.heading} />
                        {work.image[1] && (
                          <img className="work__image__two" src={work.image[1]} alt={work.heading} />
                        )}
                        {work.image[2] && (
                          <img className="work__image__three" src={work.image[2]} alt={work.heading} />
                        )}
                        <p className="work__github__website">
                          <Link className="unlink" target="_blank" to={work.githubLink} >
                            <span className="link work__gh__w">
                              {work.github} 
                              <span>
                                <FontAwesomeIcon icon={faArrowRight} />
                              </span>
                            </span>
                          </Link>
                          {work.websiteLink && (
                            <Link className="unlink" target="_blank" to={work.websiteLink}>
                              <span className="link work__gh__w">
                                {work.website ? (
                                  <>
                                    {work.website}
                                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                                  </>
                                ) : null}
                              </span>
                            </Link>
                          )}

                        </p>
                        <p className="work__description">{work.description}</p>
                        <span className="work__tech">
                          {work.tech.map((tech, index) => (
                            <p key={index}>{tech}</p>
                          ))}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    </>
  )
}


export default Work