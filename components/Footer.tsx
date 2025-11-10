'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Heart, ArrowUp } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    'We made': [
      { name: 'NutCracker', href: 'https://github.com/off-lineLabs/nutcracker' },
      { name: 'GitHub', href: 'https://github.com/off-lineLabs' },
    ],
    'Community': [
      { name: 'Contributing', href: '#collaborate' },
      { name: 'Discussions', href: 'https://github.com/orgs/off-lineLabs/discussions' },
      { name: 'Contact', href: '#contact' },
    ],
    'Resources': [
      { name: 'Documentation', href: 'https://github.com/off-lineLabs' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Code of Conduct', href: 'https://github.com/off-lineLabs/community/tree/main?tab=coc-ov-file' },
    ],
  }

  return (
    <footer className="bg-black border-t border-electric-blue/20">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Offline Labs"
                width={200}
                height={25}
                className="h-6 w-auto glow-logo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Free, open source, ad-free alternatives for everyday apps. 
              No trackers, no data collection, everything working smoothly on airplane mode.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/off-lineLabs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-10 h-10 bg-electric-blue/20 rounded-full text-electric-blue hover:bg-electric-blue/30 transition-all duration-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:online@offline-labs.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-10 h-10 bg-electric-blue/20 rounded-full text-electric-blue hover:bg-electric-blue/30 transition-all duration-300"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 5 }}
                      className="text-white/70 hover:text-electric-blue transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-electric-blue/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-white/70 mb-4 md:mb-0">
              <span>Made by the Offline Labs community</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-white/70 text-sm">
                © 2024 Offline Labs. All rights reserved.
              </span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-10 h-10 bg-electric-blue/20 rounded-full text-electric-blue hover:bg-electric-blue/30 transition-all duration-300"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
