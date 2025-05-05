'use client'

import { useState } from 'react'
import ChatMessageAnimation from '../assets/ChatMessageAnimation'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/portfolio/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      // Reset form before state updates
      form.reset()
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      })
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again or email me directly.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent">Get In Touch</h2>
                  
        <div className="hidden md:flex justify-center items-center">
            <div className="w-1/4">
              <ChatMessageAnimation />
            </div>
          </div>
          <div className="space-y-8 w-1/2 mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isLoading}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-lighter text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isLoading}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-lighter text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={isLoading}
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-lg bg-dark-light border border-dark-lighter text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none disabled:opacity-50"
                />
              </div>

              {status.type && (
                <div 
                  className={`rounded-lg p-4 ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-text py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
        </div>
        <div className="flex justify-center space-x-8 pt-8">
              <a
                href="https://www.linkedin.com/in/jacobtliberty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors text-accent"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/JacobLiberty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors text-accent"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:jacob.tobin.liberty@gmail.com"
                className="text-text hover:text-primary transition-colors text-accent"
                aria-label="Email"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </a>
            </div>
      </div>
    </section>
  )
} 