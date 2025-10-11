'use client'

import { motion } from 'framer-motion'
import { Github, Download, Star, Fork, ExternalLink, Smartphone, Activity } from 'lucide-react'

const Products = () => {
  const products = [
    {
      name: 'NutCracker',
      description: 'Track your meals and exercises with complete privacy. No cloud sync, no data collection, just pure functionality.',
      features: [
        'Meal tracking with nutritional information',
        'Exercise logging and progress tracking',
        'Offline-first design',
        'No data collection or tracking',
        'Open source and auditable'
      ],
      github: 'https://github.com/off-lineLabs/nutcracker',
      status: 'Available',
      icon: Activity,
      color: 'text-green-400',
    },
    // Placeholder for future products
    {
      name: 'More Coming Soon',
      description: 'We\'re working on more privacy-first alternatives to mainstream apps. Stay tuned!',
      features: [
        'Privacy-focused alternatives',
        'Offline-first design',
        'Open source development',
        'Community-driven features'
      ],
      github: '#',
      status: 'In Development',
      icon: Smartphone,
      color: 'text-electric-blue',
    },
  ]

  return (
    <section id="products" className="py-20 section-padding bg-gradient-to-b from-black to-electric-blue/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-electric-blue">Products</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Privacy-first alternatives to mainstream apps. No trackers, no data collection, 
            just pure functionality that works offline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8 hover:border-electric-blue/40 transition-all duration-300"
            >
              {/* Product Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-electric-blue/20 rounded-full`}>
                  <product.icon size={32} className={product.color} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    product.status === 'Available' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                  }`}>
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-white/70">
                      <div className="w-2 h-2 bg-electric-blue rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {product.status === 'Available' ? (
                  <>
                    <motion.a
                      href={product.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center justify-center space-x-2"
                    >
                      <Github size={20} />
                      <span>View on GitHub</span>
                    </motion.a>
                    <motion.a
                      href={`${product.github}/releases`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center justify-center space-x-2"
                    >
                      <Download size={20} />
                      <span>Download</span>
                    </motion.a>
                  </>
                ) : (
                  <motion.a
                    href={product.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={20} />
                    <span>Learn More</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-blue/5 border border-electric-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Suggest a Product?</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Have an idea for a privacy-first alternative to a mainstream app? 
              We'd love to hear from you!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
