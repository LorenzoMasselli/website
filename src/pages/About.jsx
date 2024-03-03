import "../styling/About.css"

function About() {



  return (
    <>
      <div className="about__container">
            <div className='about__me'>
                <h4 className='about__header'>Studied Web Development at Le Wagon Bootcamp as well as Computer Science Modules during my Bachelors at Bocconi in Milan</h4>
                <p className='about__header__subtext'>1+ years of experience in coding, designing & building web applications. Prior to this, I worked in FinTech, analyzing complex data and making strategic decisions. I also played professional rugby for 7 years.</p>
            </div>
            <div className='horizontal-line-container'><div className='horizontal-line-about'></div></div>
            <div className='about__about'>
              <h4 className='home__header'>Work Experience</h4>
              <div className="work__block__container">
                <div className="work__experience__container">
                  <p className="work__date">2024</p>
                  <p className="work__company">Beach House</p>
                  <span className="work__role">Freelance Web Design</span>
                </div>
                <div className="work__experience__container">
                  <p className="work__date"> 2022 –– 2023</p>
                  <p className="work__company">Pollinate</p>
                  <span className="work__role">Business Analyst</span>
                </div>
                <div className="work__experience__container">
                  <p className="work__date">2016 –– 2021</p>
                  <p className="work__company">Zebre | Lyons</p>
                  <span className="work__role">Professional Rugby Player</span>
                </div>
              </div>
              <p className='about__overview'>Throughout my work experience, I have developed critical thinking and analytical abilities, which enable me to approach complex problems strategically and deliver high quality solutions. My experience & my career in professional sports has enabled me to work efficiently in a high performance team environment, where I collaborate and communicate well. These skills empower me to thrive in the dynamic tech industry.</p>
            </div>
            <div className='horizontal-line-container'><div className='horizontal-line-about'></div></div>
            <div className='about__skills'>
              <h4 className='home__header'>Skills</h4>
              <div className="skills__block__container">
                <div className="skill__block">
                  <span className="skill__head">Languages</span>
                  <div className="skills__tech">
                    <span className="skill__bubble">Javascript</span>
                    <span className="skill__bubble">Typescript</span>
                    <span className="skill__bubble">Ruby</span>
                    <span className="skill__bubble">SQL</span>
                    <span className="skill__bubble">CSS</span>
                    <span className="skill__bubble">HTML</span>
                  </div>
                </div>
              </div>
              <div className="skills__block__container">
                <div className="skill__block">
                  <span className="skill__head">Frameworks & Libraries</span>
                  <div className="skills__tech">
                    <span className="skill__bubble">React</span>
                    <span className="skill__bubble">Jest</span>
                    <span className="skill__bubble">Bootstrap</span>
                    <span className="skill__bubble">Ruby on Rails</span>
                  </div>
                </div>
              </div>
              <div className="skills__block__container">
                <div className="skill__block">
                  <span className="skill__head">Other</span>
                  <div className="skills__tech">
                    <span className="skill__bubble">Git</span>
                    <span className="skill__bubble">Node.js</span>
                    <span className="skill__bubble">Github</span>
                    <span className="skill__bubble">Figma</span>
                    <span className="skill__bubble">Heroku</span>
                    <span className="skill__bubble">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default About