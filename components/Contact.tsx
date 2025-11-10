'use client'

import { motion } from 'framer-motion'
import { Mail, Github, MessageCircle } from 'lucide-react'
// Form functionality temporarily removed as per request; keeping code lean.

const Contact = () => {
  // Form state & handlers removed while the form is hidden.

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email for general inquiries',
      action: 'online@offline-labs.com',
      link: 'mailto:online@offline-labs.com',
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check our projects and look at the code',
      action: '@off-lineLabs',
      link: 'https://github.com/off-lineLabs',
    },
    {
      icon: MessageCircle,
      title: 'Discussions',
      description: 'Join our community discussions and get help',
      action: 'GitHub Discussions',
      link: 'https://github.com/orgs/off-lineLabs/discussions',
    },
  ]

  return (
    <section id="contact" className="py-20 section-padding bg-gradient-to-b from-black to-electric-blue/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s <span className="text-electric-blue">Chat</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Got questions, ideas, or just want to say hi? We&apos;d love to hear from you! 
            No corporate speak, just real people building cool stuff.
          </p>
        </motion.div>

  {/* Single column layout now that the form is hidden */}
  <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ways to Reach Us</h3>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
                    {/* Removed undefined method.contact field */}
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

          {/* Contact form intentionally hidden */}
        </div>
      </div>
    </section>
  )
}

export default Contact
