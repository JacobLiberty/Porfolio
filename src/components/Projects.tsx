export default function Projects() {
  const project = {
    title: 'Typetastic',
    description: 'A modern typing speed testing platform that generates unique tests for practice. Features include real-time performance metrics, customizable test durations, and customizable text generation.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Unique test generation for varied practice',
      'Real-time typing performance and accuracy metrics',
      'Customizable test durations',
      'Customizable text generation',
      'Responsive modern design'
    ],
    repo: 'https://github.com/JacobLiberty/typetastic',
    live: 'https://jacobliberty.github.io/typetastic/'
  }

  return (
    <section id="projects" className="w-full py-16  bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Project</h2>
        <div className="flex justify-center">
          <div className="bg-light rounded-xl shadow-lg overflow-hidden max-w-3xl w-full transform hover:scale-[1.02] transition-transform duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="flex justify-between">
                <div >
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-700">Key Features</h4>
                    <div className="flex gap-6">
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
                <img 
                    src="/portfolio/typetastic-screenshot.png" 
                    alt="Typetastic Screenshot" 
                    className="w-1/3 h-1/3 rounded-lg shadow-md object-cover"
                  />
              </div>
              <div className="flex gap-4 mt-4">
                    <a
                      href={project.live}
                      className="bg-primary text-light px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 inline-flex items-center"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href={project.repo}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                    >
                      View Source
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 