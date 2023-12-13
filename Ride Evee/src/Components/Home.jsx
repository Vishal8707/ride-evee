import React from 'react'
import Header from './Header'
import Background from '../assets/1.jpg';

function Home() {
  return (
    <>
    <Header/>
    <div className='container'>
    <img src={Background} alt="Background"/>
    </div>
    </>
  )
}

export default Home