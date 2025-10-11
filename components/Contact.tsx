'use client'

import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a service like Formspree, Netlify Forms, or your own backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email for general inquiries',
      contact: 'hello@offlinelabs.dev',
      action: 'Send Email',
      link: 'mailto:hello@offlinelabs.dev',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Report bugs, request features, or contribute code',
      contact: '@off-lineLabs',
      action: 'Visit GitHub',
      link: 'https://github.com/off-lineLabs',
    },
    {
      icon: MessageCircle,
      title: 'Discussions',
      description: 'Join our community discussions and get help',
      contact: 'GitHub Discussions',
      action: 'Join Discussions',
      link: 'https://github.com/off-lineLabs/discussions',
    },
  ]

  return (
    <section id="contact" className="py-20 section-padding bg-gradient-to-b from-black to-electric-blue/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-electric-blue">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or want to contribute? We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Methods</h3>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-electric-blue/20 rounded-full flex-shrink-0">
                    <method.icon size={24} className="text-electric-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                    <p className="text-white/70 mb-2">{method.description}</p>
                    <p className="text-electric-blue font-medium mb-3">{method.contact}</p>
                    <motion.a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-electric-blue hover:text-electric-blue/80 transition-colors duration-300 font-medium"
                    >
                      <span>{method.action}</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-electric-blue/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300 resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
