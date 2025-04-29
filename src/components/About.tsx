export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-background-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate software engineer with expertise in building modern web applications.
              I love creating efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I bring ideas to life through clean, maintainable code and innovative solutions.
              I'm constantly learning and adapting to new technologies to stay at the forefront of software development.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                <h4 className="font-semibold text-xl text-gray-900">Senior Software Engineer</h4>
                <p className="text-primary mt-1">Current Company • 2020 - Present</p>
                <p className="text-gray-600 mt-2">Leading development of enterprise applications and mentoring junior developers</p>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-secondary before:rounded-full">
                <h4 className="font-semibold text-xl text-gray-900">Software Engineer</h4>
                <p className="text-secondary mt-1">Previous Company • 2018 - 2020</p>
                <p className="text-gray-600 mt-2">Developed and maintained web applications using modern technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 