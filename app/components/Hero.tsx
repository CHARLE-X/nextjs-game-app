import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <>
    
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/images/1051881.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content flex-col lg:flex-row">
  <img src="/images/rashford2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
   <div>
      <h1 className="text-5xl font-bold">YOU SABI BALL?</h1>
      <p className="text-3xl font-bold"><a href="/components">Click to Start!</a></p>
      {/* <button className="btn btn-primary">Click to start</button> */}
      {/* <a className='link link-accent' href="/components">Click To Start</a> */}
    </div>
    </div>
</div>
    </>
  )
}


export default Hero