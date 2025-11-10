'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Zap, Shield, Heart } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-electric-blue/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container-max section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center w-full px-4 py-2"
          >
            <Image
              src="/logo.svg"
              alt="Offline Labs"
              width={762}
              height={100}
              className="w-full max-w-4xl h-auto glow-logo mx-auto"
              style={{ objectFit: 'contain', display: 'block' }}
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4"
          >
            A community building free, open source, ad-free alternatives for everyday apps.
            <br />
            <span className="text-electric-blue font-semibold">No trackers. No data collection. No corporate BS.</span>
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { icon: Shield, text: 'Privacy First' },
              { icon: Zap, text: 'Lightning Fast' },
              { icon: Heart, text: 'Open Source' },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-2 text-electric-blue"
              >
                <feature.icon size={24} />
                <span className="font-semibold">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Check Out Our Apps
            </motion.a>
            <motion.a
              href="#collaborate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get Involved
            </motion.a>
          </motion.div>
          {/* Scroll Indicator (moved into flow) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-electric-blue text-center"
            >
              <span className="text-sm mb-2 whitespace-nowrap">Scroll to explore</span>
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
