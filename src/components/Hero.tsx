import HeaderAnimation from '../assets/HeaderAnimation'
import Divider from './Divider'

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center bg-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text">
            Hi, I'm <span className="text-accent">Jacob Liberty</span>
          </h1>
          <p className="text-xl sm:text-2xl text-light max-w-2xl mx-auto">
            Software Engineer | Full Stack Developer
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-text rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center p-8">
          <a href="#about" className="">
            <HeaderAnimation />
          </a>
        </div>
      </div>
      <Divider className="absolute bottom-0 left-0 rotate-180" fillColor="white" />
    </section>
  )
} 