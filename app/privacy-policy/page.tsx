'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Footer from '@/components/Footer'

const PrivacyPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Simplified Navigation - Logo Only */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-electric-blue/20"
      >
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-6 w-[200px] cursor-pointer"
              >
                <Image
                  src="/logo.svg"
                  alt="Offline Labs"
                  fill
                  className="glow-logo object-contain object-center"
                  priority
                  sizes="200px"
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>
      
      <div className="pt-32 pb-20">
        <div className="container-max section-padding">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-electric-blue/10 p-4 rounded-full mb-6"
              >
                <Shield className="w-12 h-12 text-electric-blue" />
              </motion.div>
            </div>

            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center text-gradient"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Privacy Policy
            </motion.h1>

            {/* Content Sections */}
            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Our Commitment</h2>
                <p className="text-white/80 leading-relaxed">
                  At Offline Labs, we value your privacy. This website and all its subdomains are free from trackers, analytics, ads, or any invasive technologies. We do not collect, store, or process any personal data. You might have noticed there is no cookie banner—because there are no cookies.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Third-Party Infrastructure</h2>
                <p className="text-white/80 leading-relaxed">
                  Our infrastructure relies on Cloudflare for DNS resolution and DDoS protection, and GitHub Pages for static site hosting. These providers operate at the network layer and may log IP addresses, user agents, request timestamps, and TLS handshake metadata as part of their standard operational telemetry. While we have no access to or control over this data, you should review Cloudflare's and GitHub's respective privacy policies to understand their data retention and processing practices.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Beyond Our Control</h2>
                <p className="text-white/80 leading-relaxed">
                  Additionally, your browser, operating system, ISP, state agencies, DNS provider, or unauthorized individuals may still track your activity. While we cannot control these entities, we assure you that Offline Labs is not among them.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4 text-electric-blue">Contact Us</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  Since we do not collect any data, we cannot offer options to delete or manage your data. If you have any concerns, feel free to contact us at{' '}
                  <a 
                    href="mailto:privacy@offline-labs.com" 
                    className="text-electric-blue hover:underline transition-colors duration-300"
                  >
                    privacy@offline-labs.com
                  </a>.
                </p>
                <p className="text-white/80 leading-relaxed">
                  For security-related issues, such as vulnerabilities that could expose users to tracking, please reach out to{' '}
                  <a 
                    href="mailto:security@offline-labs.com" 
                    className="text-electric-blue hover:underline transition-colors duration-300"
                  >
                    security@offline-labs.com
                  </a>.
                </p>
              </div>

              <div className="bg-electric-blue/5 backdrop-blur-sm rounded-xl p-6 border border-electric-blue/30">
                <p className="text-sm text-white/70 text-center">
                  This privacy policy complies with GDPR and other relevant European regulations. For further inquiries, please contact us.
                </p>
              </div>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div 
              className="mt-12 flex justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default PrivacyPolicy