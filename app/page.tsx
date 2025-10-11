'use client'

import { motion } from 'framer-motion'
import { Github, Mail, Heart, Shield, Zap, Users, Code, Smartphone } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhatIsIt from '@/components/WhatIsIt'
import WhoWeAre from '@/components/WhoWeAre'
import Manifesto from '@/components/Manifesto'
import Products from '@/components/Products'
import HowToCollaborate from '@/components/HowToCollaborate'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <WhatIsIt />
      <WhoWeAre />
      <Manifesto />
      <Products />
      <HowToCollaborate />
      <Contact />
      <Footer />
    </main>
  )
}
