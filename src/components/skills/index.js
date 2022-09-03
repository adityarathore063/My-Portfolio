import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I love to keep a variety of tools in my tech stack. I keep
            myself up to date with the latest technologies around. I put
            special effort into optimizing my code and providing the best
            user experience. I guarantee a commitment during work on your
            project.
          </p>
          <br/>
          <p>
            I am Competitive programmer and i have good knowledge in
            <span className='tech-tag'> Data Structures and Algorithms </span> including technologies like
            <span className='tech-tag'> HTML5</span>,<span className='tech-tag'> CSS3</span>,<span className='tech-tag'> Javascript</span>,
            <span className='tech-tag'> Express</span>,<span className='tech-tag'> React</span>,<span className='tech-tag'> NodeJs</span>,
            <span className='tech-tag'> Bootstarp</span>,<span className='tech-tag'> Git and Github</span>, <span className='tech-tag'> MongoDB</span>,
            <span className='tech-tag'> C/C++</span> .
          </p>
          <br/>
          <p>
            Visit my <span><a className='tech-tag' href='https://www.linkedin.com/in/aditya-singh-093798118/'>Linkedin</a></span> profile
            for more details. You can also checkout my resume on this <a href='https://drive.google.com/file/d/1AZVAPoAndekesTd6w1yV5PjsH9q1ETmP/view?usp=sharing' className='tech-tag'>link</a> .
          </p>

        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills