'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Zap, Heart, Code } from 'lucide-react'

const Manifesto = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Privacy by Design',
      description: 'We believe your data belongs to you. No tracking, no surveillance, no data collection.',
    },
    {
      icon: Lock,
      title: 'Offline First',
      description: 'Your apps should work when you need them most, even without internet connection.',
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Transparency builds trust. All our code is open source and auditable.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'No bloat, no unnecessary features. Just fast, efficient software that works.',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Built by the community, for the community. No corporate interests or profit motives.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We show you exactly what our apps do. No hidden features or data collection.',
    },
  ]

  return (
    <section id="manifesto" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-electric-blue">Manifesto</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We believe in a different kind of software. One that respects your privacy, 
            works offline, and puts you in control.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-xl p-6 hover:border-electric-blue/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-full mb-4">
                <principle.icon size={32} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
              <p className="text-white/70 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Manifesto Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-blue/5 border border-electric-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">The Offline Labs Promise</h3>
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                <strong className="text-electric-blue">We will never track you.</strong> Your data stays on your device. 
                We don&apos;t collect analytics, usage statistics, or any personal information.
              </p>
              <p>
                <strong className="text-electric-blue">We will never show you ads.</strong> Our apps are completely 
                ad-free. No sponsored content, no tracking pixels, no data monetization.
              </p>
              <p>
                <strong className="text-electric-blue">We will always be open source.</strong> You can see exactly 
                what our apps do. You can modify them, improve them, and share them.
              </p>
              <p>
                <strong className="text-electric-blue">We will always work offline.</strong> Your apps should work 
                when you need them most, whether you&apos;re on a plane, in a tunnel, or just have poor connectivity.
              </p>
              <p>
                <strong className="text-electric-blue">We will always be free.</strong> No subscriptions, no in-app 
                purchases, no premium features. Everything we build is free for everyone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Manifesto
