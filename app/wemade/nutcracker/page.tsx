'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Smartphone,
  Shield,
  Zap,
  Target,
  SlidersHorizontal,
  Activity,
  Users,
  Code,
  Globe,
  Search,
  Pill,
  Sheet,
  Dumbbell,
  ClipboardList
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const NutCrackerPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [termsContent, setTermsContent] = useState('')
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [isLoadingTerms, setIsLoadingTerms] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ]

  const loadTermsContent = useCallback(async (language: string) => {
    const termsUrls = {
      en: 'https://raw.githubusercontent.com/off-lineLabs/nutcracker/refs/heads/main/app/src/main/res/raw/terms.html',
      es: 'https://raw.githubusercontent.com/off-lineLabs/nutcracker/refs/heads/main/app/src/main/res/raw-es-rES/terms.html',
      pt: 'https://raw.githubusercontent.com/off-lineLabs/nutcracker/refs/heads/main/app/src/main/res/raw-pt-rBR/terms.html'
    }
    
    setIsLoadingTerms(true)
    try {
      const response = await fetch(termsUrls[language as keyof typeof termsUrls])
      if (response.ok) {
        const html = await response.text()
        setTermsContent(html)
      } else {
        setTermsContent('<p>Terms and conditions will be available soon.</p>')
      }
    } catch (error) {
      setTermsContent('<p>Terms and conditions will be available soon.</p>')
    } finally {
      setIsLoadingTerms(false)
    }
  }, [])

  useEffect(() => {
    loadTermsContent(selectedLanguage)
  }, [selectedLanguage, loadTermsContent])

  // Auto-expand and scroll to Terms when visiting with #terms
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.location.hash === '#terms') {
      setIsTermsExpanded(true)
      const el = document.getElementById('terms')
      if (el) {
        // Defer to allow expansion animation to set height
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
    }
  }, [])

  const features = [
    {
      icon: ClipboardList,
      title: 'Meal Tracking',
      description: 'Log your meals with detailed nutritional information. Track calories and macronutrients with ease.'
    },
    {
      icon: Dumbbell,
      title: 'Exercise Logging',
      description: 'Record your workouts and track your fitness progress. Monitor your achievements and history.'
    },
    {
      icon: Search,
      title: 'Food Details',
      description: 'Search food by name or barcode to get extensive nutritional data, including NOVA and NUTRI score.'
    },
    {
      icon: Pill,
      title: 'Supplement Tracking',
      description: 'Keep track of the daily consumption of up to 5 supplements. No more worries about forgetting them.'
    },
    {
      icon: Sheet,
      title: 'Export Everything',
      description: 'All your data can be exported as CSV files for easy backup or your own analysis.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Features and improvements driven by user feedback. Join our community and shape the future.'
    }
  ]

  const screenshots = [
    { src: '/nutcracker-screenshot-1.png', title: 'Track calories and macros', alt: 'Advanced calorie tracker including TEF bonus, fiber and salt intake' },
    { src: '/nutcracker-screenshot-2.png', title: 'Food quality scores', alt: 'Get NOVA, NUTRI and Eco-score of each food, beyond its nutrients' },
    { src: '/nutcracker-screenshot-3.png', title: 'Progress analytics', alt: 'Check your weekly or monthly progress with detailed analytics' },
    { src: '/nutcracker-screenshot-4.png', title: 'Gym routine tracker', alt: 'Easily keep track your gym routine' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-electric-blue/20 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-white hover:text-electric-blue transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Offline Labs</span>
            </Link>
            {/* Language menu removed from navbar */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 section-padding bg-gradient-to-b from-black to-electric-blue/5">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-electric-blue/20 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/nutcracker-logo.svg" 
                  alt="NutCracker Logo" 
                  width={64} 
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-electric-blue">NutCracker</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Track your meals and exercises with complete privacy. No cloud sync, no data collection, 
              just pure functionality that works offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.offlinelabs.nutcracker"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <Download size={24} />
                <span>Download on Google Play</span>
              </motion.a>
              <motion.a
                href="https://github.com/off-lineLabs/nutcracker"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <ExternalLink size={24} />
                <span>View on GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See It In <span className="text-electric-blue">Action</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience the clean, intuitive interface designed for your privacy and convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group rounded-lg overflow-hidden"
              >
                <div className="aspect-[9/16] relative">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent blur-xl"></div>
                    <div className="relative p-3">
                      <p className="text-[11px] font-semibold text-electric-blue">{screenshot.title}</p>
                      <p className="text-[10px] text-white/80 mt-0.5 line-clamp-2">{screenshot.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-padding bg-gradient-to-b from-electric-blue/5 to-black">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="text-electric-blue">Features</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Everything you need to track your health and fitness, with complete privacy and offline functionality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                    <feature.icon size={24} className="text-electric-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Privacy Section */}
  <section id="terms" className="py-20 section-padding">
    <div className="container-max">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Terms of Use & Privacy Policy
            </h2>
            <button
              onClick={() => setIsTermsExpanded(!isTermsExpanded)}
              className="flex items-center space-x-2 text-electric-blue hover:text-electric-blue/80 transition-colors"
            >
              <span className="text-sm">
                {isTermsExpanded ? 'Hide' : 'Show'} Terms
              </span>
              {isTermsExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          {isTermsExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-electric-blue/20 pt-6"
            >
              {/* Language menu moved here */}
              <div className="flex items-center space-x-2 mb-6">
                <Globe size={16} className="text-electric-blue" />
                <span className="text-sm text-white/70">Language:</span>
                <div className="flex space-x-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`px-2 py-1 rounded text-sm transition-colors ${
                        selectedLanguage === lang.code
                          ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
              </div>
              {isLoadingTerms ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue"></div>
                  <span className="ml-3 text-white/70">Loading terms...</span>
                </div>
              ) : (
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: termsContent }}
                />
              )}
            </motion.div>
          )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-padding bg-gradient-to-b from-black to-electric-blue/10">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Take <span className="text-electric-blue">Control</span>?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              No account needed, no data collected. Give it a try!
              <br />It is entirely free and open source.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.offlinelabs.nutcracker"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <Download size={24} />
                <span>Download Now</span>
              </motion.a>
              <motion.a
                href="https://github.com/off-lineLabs/nutcracker"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <ExternalLink size={24} />
                <span>View Source</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NutCrackerPage
