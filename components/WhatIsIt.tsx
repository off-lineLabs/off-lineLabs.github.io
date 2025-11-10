'use client'

import { motion } from 'framer-motion'
import { WifiOff, Shield, Code, Heart, Lock, Zap, SlidersHorizontal, Target } from 'lucide-react'

const WhatIsIt = () => {
  const coreValues = [
    {
      icon: WifiOff,
      title: 'Offline First',
      description: 'Your apps should work when you need them most, even without internet connection.',
    },
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'We believe your data belongs to you. No tracking, no surveillance, no data collection.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Transparency builds trust. All our code is open source and auditable.',
    },
    {
      icon: Target,
      title: 'Focused Utility',
      description: 'No bloat, no ads, no unnecessary "smart" features. Just fast, efficient software that does what it is supposed to do.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Built by the community, for the community. No corporate interests or profit motives.',
    },
    {
      icon: SlidersHorizontal,
      title: 'User Empowerment',
      description: 'Full control, no unnecessary limits. Our apps let you customize and optimize your experience as you see fit.',
    },
  ]

  return (
    <section id="what-is-it" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What is <span className="text-electric-blue">Offline Labs</span>?
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Offline Labs is a community-driven project creating free, open source, ad-free alternatives 
            for everyday apps. We believe your smartphone is a powerful computer, yet most 
            apps fail to deliver a smooth experience while requiring all your data.
          </p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            The goal is to gather digital DIY enthusiasts who got tired of apps that spy on you, 
            slow down your device, and require constant internet. So we decided to build our own. 
            These are the core values that guide everything we do:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 text-center hover:border-electric-blue/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-full mb-4">
                <value.icon size={32} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIsIt
