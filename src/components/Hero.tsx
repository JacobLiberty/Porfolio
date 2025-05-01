'use client'

import HeaderAnimation from '../assets/HeaderAnimation'
import Divider from './Divider'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  text-text">
            Hi I'm Jacob Liberty,
          </h1>
          <h2 className="text-3xl  font-bold text-accent">
              <Typewriter
              options={{
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.typeString('Software Engineer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Coffee Nerd')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Full Stack Developer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('World Traveler')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Lifelong Learner')
                .pauseFor(1000)
                .deleteAll()
                .start()
              }}/>
          </h2>
        </div>
        <div className="w-full flex justify-center p-8">
            <HeaderAnimation />  
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white hover:text-primary transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <svg 
          className="w-16 h-16" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
      <Divider className="absolute bottom-[-5px] left-0 rotate-180" fillColor="white" />
    </section>
  )
} 