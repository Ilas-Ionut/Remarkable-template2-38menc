import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Essential Dense Rook</title>
        <meta property="og:title" content="Essential Dense Rook" />
      </Helmet>
    </div>
  )
}

export default Home
