'use client'

import { motion } from 'framer-motion'
import { Github, Code, Bug, FileText, Users, Heart, Zap } from 'lucide-react'

const HowToCollaborate = () => {
  const waysToContribute = [
    {
      icon: Code,
      title: 'Code Development',
      description: 'Contribute to our open source projects. Whether you\'re fixing bugs or adding features, every contribution matters.',
      action: 'View on GitHub',
      link: 'https://github.com/off-lineLabs',
    },
    {
      icon: Bug,
      title: 'Bug Reports',
      description: 'Found a bug? Report it! Help us make our apps more stable and reliable.',
      action: 'Report Issues',
      link: 'https://github.com/off-lineLabs/nutcracker/issues',
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Help improve our documentation, write tutorials, or translate our apps.',
      action: 'Help with Docs',
      link: 'https://github.com/off-lineLabs',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our community discussions, share ideas, and help others.',
      action: 'Join Community',
      link: '#contact',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Fork the Repository',
      description: 'Start by forking the project repository on GitHub.',
    },
    {
      number: '02',
      title: 'Create a Branch',
      description: 'Create a new branch for your feature or bug fix.',
    },
    {
      number: '03',
      title: 'Make Changes',
      description: 'Implement your changes following our coding standards.',
    },
    {
      number: '04',
      title: 'Submit a Pull Request',
      description: 'Submit your changes for review and merge.',
    },
  ]

  return (
    <section id="collaborate" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How to <span className="text-electric-blue">Get Involved</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We believe in the power of community. Every contribution, no matter how small, 
            helps us build better privacy-first alternatives. No corporate hierarchy, just people working together.
          </p>
        </motion.div>

        {/* Ways to Contribute */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {waysToContribute.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 text-center hover:border-electric-blue/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-full mb-4">
                <way.icon size={32} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{way.title}</h3>
              <p className="text-white/70 mb-4 leading-relaxed">{way.description}</p>
              <motion.a
                href={way.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-electric-blue hover:text-electric-blue/80 transition-colors duration-300 font-medium"
              >
                <span>{way.action}</span>
                <Github size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>


        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-electric-blue/10 border border-electric-blue/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-full mb-4">
              <Heart size={32} className="text-electric-blue" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Contribution Guidelines</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Zap className="text-electric-blue mr-2" size={20} />
                Code Standards
              </h4>
              <ul className="space-y-2 text-white/70">
                <li>• Follow our coding style guidelines</li>
                <li>• Write clear, documented code</li>
                <li>• Test your changes thoroughly</li>
                <li>• Keep commits focused and atomic</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Users className="text-electric-blue mr-2" size={20} />
                Community
              </h4>
              <ul className="space-y-2 text-white/70">
                <li>• Be respectful and inclusive</li>
                <li>• Help others learn and grow</li>
                <li>• Share knowledge and experience</li>
                <li>• Follow our code of conduct</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowToCollaborate
