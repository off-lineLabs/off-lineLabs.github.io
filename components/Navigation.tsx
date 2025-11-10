'use client'

import { useState, useEffect, useContext } from 'react'
import { CentralLogoContext } from './CentralLogoProvider'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const context = useContext(CentralLogoContext)
  const centralLogoVisible = context?.centralLogoVisible ?? true

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'What is it', href: '#what-is-it' },
    { name: "What we're building", href: '#products' },
    { name: 'Get involved', href: '#collaborate' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-electric-blue/20' : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center overflow-visible"
          >
            <motion.div
              initial={false}
              animate={{
                opacity: centralLogoVisible ? 0 : 1,
                y: centralLogoVisible ? -20 : 0,
                pointerEvents: centralLogoVisible ? 'none' : 'auto',
              }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex' }}
            >
              <Image
                src="/logo.svg"
                alt="Offline Labs"
                width={200}
                height={25}
                className="h-6 w-auto glow-logo"
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-electric-blue transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-electric-blue transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
                className="block text-white hover:text-electric-blue transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      </motion.nav>
  )
}

export default Navigation
