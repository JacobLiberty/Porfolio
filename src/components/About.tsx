export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-dark relative">
      <div className="relative mx-auto rounded-2xl max-w-[90%]">
        <div className="relative max-w-7xl mx-auto px-8 py-16 sm:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden group bg-light">
              <img 
                src="/portfolio/headshot.jpg" 
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
      </div>
    </section>
  )
} 