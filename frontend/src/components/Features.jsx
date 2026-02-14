import { motion } from 'framer-motion';
import { Video, MessageCircle, Calendar, Lock, Users, TrendingUp, Brain, Shield } from 'lucide-react';
import { useState } from 'react';
import '../styles/Features.css';

const features = [
  {
    icon: Video,
    title: 'HD Video Sessions',
    description: 'Crystal-clear face-to-face therapy from anywhere with secure, encrypted video calls.',
    gradient: 'from-sky-500 to-blue-500',
    glow: 'rgba(14, 165, 233, 0.3)'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations and insights powered by advanced AI technology.',
    gradient: 'from-violet-500 to-purple-500',
    glow: 'rgba(139, 92, 246, 0.3)'
  },
  {
    icon: MessageCircle,
    title: '24/7 Chat Support',
    description: 'Message your therapist anytime between scheduled sessions, day or night.',
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'rgba(6, 182, 212, 0.3)'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Intelligent booking system that learns your preferences and suggests optimal times.',
    gradient: 'from-emerald-500 to-green-500',
    glow: 'rgba(16, 185, 129, 0.3)'
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'End-to-end encryption with military-grade security protocols.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.3)'
  },
  {
    icon: Users,
    title: 'Expert Network',
    description: '750+ certified professionals across multiple specializations worldwide.',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'rgba(236, 72, 153, 0.3)'
  },
  {
    icon: TrendingUp,
    title: 'Progress Analytics',
    description: 'Comprehensive tracking with visual dashboards and detailed progress reports.',
    gradient: 'from-blue-500 to-indigo-500',
    glow: 'rgba(59, 130, 246, 0.3)'
  },
  {
    icon: Lock,
    title: 'Complete Privacy',
    description: 'Your data is encrypted and never shared. Full HIPAA compliance guaranteed.',
    gradient: 'from-teal-500 to-emerald-500',
    glow: 'rgba(20, 184, 166, 0.3)'
  },
];

function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="features">
      <div className="features-background">
        <div className="features-glow-1" />
        <div className="features-glow-2" />
      </div>

      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="features-label"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-icon">✨</span>
            <span>Platform Features</span>
          </motion.div>
          <h2 className="features-title">
            Everything you need for
            <span className="features-title-gradient"> exceptional care</span>
          </h2>
          <p className="features-subtitle">
            Cutting-edge technology meets compassionate mental health support
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="feature-card-glow"
                style={{ background: `radial-gradient(circle at center, ${feature.glow} 0%, transparent 70%)` }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              />
              <div className="feature-icon-wrapper">
                <motion.div
                  className={`feature-icon ${feature.gradient}`}
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={24} strokeWidth={2} />
                </motion.div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <motion.div
                className="feature-card-shine"
                animate={{
                  x: hoveredIndex === index ? ['0%', '200%'] : '0%',
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
