import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  })

  const nameArray = ['A',' ', 'd',' ', 'i',' ', 't',' ', 'y',' ', 'a']
  const jobArray = [
    'P',
    ' ',
    'r',
    ' ',
    'o',
    ' ',
    'g',
    ' ',
    'r',
    ' ',
    'a',
    ' ',
    'm',
    ' ',
    'm',
    ' ',
    'e',
    ' ',
    'r',
    '.'
  ]

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}`}> </span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass}`}> </span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass}`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={10}
            />
          </h1>
          <h2>Full Stack Developer/ Competetive Programmer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
