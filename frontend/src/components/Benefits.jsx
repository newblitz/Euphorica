import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Award, Heart } from 'lucide-react';
import { useRef } from 'react';
import '../styles/Benefits.css';

const benefits = [
  {
    title: 'Professional Excellence',
    description: 'Connect with board-certified therapists who have years of experience helping people just like you.',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Award,
    features: ['Board Certified', '10+ Years Experience', 'Specialized Care']
  },
  {
    title: 'Personalized Journey',
    description: 'Every therapy plan is tailored specifically to your unique needs, goals, and circumstances.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Heart,
    features: ['Custom Plans', 'Your Pace', 'Flexible Approach']
  },
  {
    title: 'Proven Results',
    description: 'Our evidence-based methods have helped over 5,000 clients achieve lasting positive change.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Star,
    features: ['98% Success Rate', 'Evidence-Based', 'Measurable Progress']
  },
];

function Benefits() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="benefits">
      <div className="benefits-background" />

      <div className="container">
        <motion.div
          className="benefits-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="benefits-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle size={16} />
            <span>Why Choose Us</span>
          </motion.div>
          <h2 className="benefits-title">
            Transform your life with
            <span className="benefits-gradient"> world-class care</span>
          </h2>
          <p className="benefits-subtitle">
            Experience the difference that personalized, professional mental health support can make
          </p>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div
                className="benefit-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="benefit-image-overlay" />
                <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                <motion.div
                  className="benefit-icon-float"
                  style={{ y }}
                >
                  <benefit.icon size={32} strokeWidth={1.5} />
                </motion.div>
              </motion.div>

              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <ul className="benefit-features">
                  {benefit.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="benefits-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="benefits-cta-content">
            <h3>Ready to begin your transformation?</h3>
            <p>Join thousands who have already started their journey to better mental health</p>
          </div>
          <motion.a
            href="/appointment"
            className="benefits-cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(14, 165, 233, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Benefits;
