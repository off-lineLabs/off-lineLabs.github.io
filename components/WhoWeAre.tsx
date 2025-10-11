'use client'

import { motion } from 'framer-motion'
import { Github, User, Code, Heart } from 'lucide-react'

const WhoWeAre = () => {
  // For now, we'll show the founder and mention the community
  // Later this can be integrated with GitHub API to fetch contributors
  const team = [
    {
      name: 'Jonas Coelho',
      role: 'Founder & Lead Developer',
      avatar: 'https://avatars.githubusercontent.com/u/your-github-id', // Replace with actual GitHub avatar
      bio: 'Passionate about privacy-first software and open source development.',
      github: 'https://github.com/your-username', // Replace with actual GitHub profile
    },
  ]

  return (
    <section id="who-we-are" className="py-20 section-padding bg-gradient-to-b from-black to-electric-blue/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who <span className="text-electric-blue">We Are</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A community of developers, designers, and privacy enthusiasts working together 
            to create better alternatives to mainstream apps.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 text-center hover:border-electric-blue/40 transition-all duration-300"
            >
              <div className="w-24 h-24 bg-electric-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User size={40} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-electric-blue font-medium mb-3">{member.role}</p>
              <p className="text-white/70 text-sm mb-4">{member.bio}</p>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-electric-blue hover:text-electric-blue/80 transition-colors duration-300"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-blue/5 border border-electric-blue/20 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-full">
                <Heart size={32} className="text-electric-blue" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
              We're always looking for contributors! Whether you're a developer, designer, 
              tester, or just someone who cares about privacy, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/off-lineLabs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </motion.a>
              <motion.a
                href="#collaborate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Learn How to Contribute
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoWeAre
