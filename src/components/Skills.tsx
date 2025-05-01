export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Phoenix LiveView', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Django', 'GraphQL', 'Elixir']
    },
    {
      title: 'Database',
      skills: [ 'PostgreSQL', 'MongoDB', 'PG Admin']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD']
    }
  ]

  return (
    <section id="skills" className="w-full py-16 bg-gradient-to-b from-dark via-dark to-light relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-light/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 