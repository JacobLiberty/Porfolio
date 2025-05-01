'use client'

import CodingAnimation from '@/assets/CodingAnimation'

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full">
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-accent text-center mb-8 mt-8">Experience</h2>
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="hidden md:flex items-center">
              <CodingAnimation />
            </div>
            <div className="bg-light rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
              <div className="flex flex-col h-full">
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <h4 className="font-semibold text-xl text-gray-900">Software Engineer at ReturnBear</h4>
                  <p className="text-primary mt-0.5">Current Company • 2022 - Present</p>
                  <p className="text-gray-600 mt-2 text-sm">Developing complex and efficient applications to enable retail returns and item processing from consumer initiation to product restocking.</p>
                </div>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span>▪</span>
                    <span>Developed a warehousing application that increased productivity by 50% through improved efficiency and observability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>▪</span>
                    <span>Full Stack development using Next.js, TypeScript, GraphQL, Python, and Django</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>▪</span>
                    <span>Built an Elixir Phoenix LiveView application that consolidated multiple apps while improving performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-light rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
              <div className="flex flex-col h-full">
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <h4 className="font-semibold text-xl text-gray-900">Learning Assistant at EdX (Previously Trilogy Education)</h4>
                  <p className="text-gray-600 mt-0.5">Previous Company • 2022 - 2023</p>
                  <p className="text-gray-600 mt-2 text-sm">Assisted students in development courses through full-stack JavaScript course content by teaching coding tips, strategies and new technologies.</p>
                </div>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span>▪</span>
                    <span>Communicated with students to teach key concepts and reinforce their knowledge which improved their JavaScript coding ability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>▪</span>
                    <span>Worked with a team of experienced Instructors and Developers to improve communication, coding knowledge, and student experience.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-light rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
              <div className="flex flex-col h-full">
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  <h4 className="font-semibold text-xl text-gray-900">Computer Network Technician at You.i TV</h4>
                  <p className="text-primary mt-0.5">2019 - 2020</p>
                  <p className="text-gray-600 mt-2 text-sm">Assisted the Information Technology team with various tasks around the office.</p>
                </div>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm flex-grow">
                  <li className="flex items-start gap-2">
                    <span>▪</span>
                    <span>Asset Tracking and inventory management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>▪</span>
                    <span>Worked with MDMs and updated software automatically with scripting.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 