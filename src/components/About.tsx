export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-background-light relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border-4 rounded-2xl" />
            <img 
              src="/headshot.jpg" 
              alt="Professional headshot" 
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary">About Me</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Professional</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Front-end focused developer with extensive experience in NextJS and Phoenix LiveView</li>
                <li>Backend expertise in Elixir and Python with a PostgreSQL database</li>
                <li>Recently gained proficiency in Elixir and Phoenix LiveView, expanding functional programming knowledge</li>
                <li>Regularly incorporates AI tools to enhance development efficiency</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Personal</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Passionate about coffee - enjoys experimenting with and brewing at home</li>
                <li>Avid traveler - lived in Argentina, learned Spanish, and explored South America</li>
                <li>Custom keyboard enthusiast - builds mechanical keyboards as a hobby</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 