'use client'

import { motion } from 'framer-motion'
import { Smartphone, Wifi, WifiOff, Shield, Code, Heart } from 'lucide-react'

const WhatIsIt = () => {
  const features = [
    {
      icon: WifiOff,
      title: 'Works Offline',
      description: 'All our apps work perfectly without internet connection. Your data stays on your device.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'No trackers, no data collection, no analytics. Your privacy is our priority.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'All code is open source and auditable. Transparency is key to trust.',
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Built by the community, for the community. No corporate interests.',
    },
  ]

  return (
    <section id="what-is-it" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What is <span className="text-electric-blue">Offline Labs</span>?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Offline Labs is a project created to provide free, open source, ad-free alternatives 
            for everyday apps. We believe your smartphone is a powerful computer, yet most 
            apps fail to deliver a smooth experience while requiring all your data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 text-center hover:border-electric-blue/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-full mb-4">
                <feature.icon size={32} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-blue/5 border border-electric-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              To create a community of digital DIY enthusiasts who collaborate on solutions 
              that respect your privacy, work offline, and deliver smooth experiences without 
              the bloat and surveillance of mainstream apps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIsIt
