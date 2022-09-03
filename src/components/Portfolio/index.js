import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })
  const port = [
    {
      cover: '/portfolio/1/coingo.jpeg',
      title: 'Coin Go',
      description: 'This is a React Crypto price tracker app using CoinGecko API',
      url: 'https://coin-go-aditya063.netlify.app/',
      sourceUrl:'https://github.com/adityarathore063/Coin-Go'
    },
    {
      cover: '/portfolio/1/disney.jpeg',
      title: 'Disney Plus Clone',
      description: 'This is clone of disney + using React and Firebase',
      url: 'https://disney-clone-ebab3.web.app/',
      sourceUrl:'https://github.com/adityarathore063/disney-plus-clone'
    },
    {
      cover: '/portfolio/1/confession.jpeg',
      title: 'Confession',
      description: 'This is Confession App using Nodejs, MongodB and Google Authentication',
      url: 'https://confession-page.herokuapp.com/',
      sourceUrl:'https://github.com/adityarathore063/Confession'
    },
    {
      cover: '/portfolio/1/WhatsApp Image 2022-08-31 at 11.23.41 AM.jpeg',
      title: 'Keeper App',
      description: 'Clone of Google Keep using Hooks and useState in React.js',
      url: 'https://keeper-app-aditya063.netlify.app/',
      sourceUrl: 'https://github.com/adityarathore063/Keeper-App',
    },
    {
      cover: '/portfolio/1/WhatsApp Image 2022-08-31 at 11.23.41 AM.jpeg',
      title: 'To Do List',
      description: 'A to-do list with features to add and delete tasks.',
      url: 'https://safe-springs-60434.herokuapp.com/',
      sourceUrl:'https://github.com/adityarathore063/TodoList/tree/master'
    },
    {
      cover: '/portfolio/1/newsletter.jpeg',
      title: 'NewsLetter',
      description: 'It collects data of users for sending newsletters through emails. ',
      url: 'https://safe-plateau-63752.herokuapp.com/',
      sourceUrl:'https://github.com/adityarathore063/Newsletter-Signup/tree/master'
    },
  ]

  const renderPortfolio = (port) => {
    return (
      <div className="images-container">
            <div className="image-box">
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View App
                </button>
                <button className="btn-source btn" onClick={() => window.open(port.sourceUrl)}>
                  View Source code
                </button>
              </div>
            </div>
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'P r o j e c t'.split('')}
            idx={15}
          />
        </h1>
        <Row>
        <Col>{renderPortfolio(port[0])}</Col>
          <Col>{renderPortfolio(port[1])}</Col>
        </Row>
        <Row>
          <Col>{renderPortfolio(port[2])}</Col>
          <Col>{renderPortfolio(port[3])}</Col>
        </Row>
        <Row>
          <Col>{renderPortfolio(port[4])}</Col>
          <Col>{renderPortfolio(port[5])}</Col>
        </Row>


      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
