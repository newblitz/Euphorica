import { motion } from 'framer-motion';
import { Video, MessageCircle, Calendar, Lock, Users, TrendingUp } from 'lucide-react';
import '../styles/Features.css';

const features = [
  {
    icon: Video,
    title: 'Video Sessions',
    description: 'Face-to-face therapy from anywhere with secure, encrypted video calls.',
  },
  {
    icon: MessageCircle,
    title: 'Chat Support',
    description: 'Message your therapist anytime between scheduled sessions.',
  },
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Book appointments that fit your schedule with flexible time slots.',
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description: 'End-to-end encryption ensures your conversations stay confidential.',
  },
  {
    icon: Users,
    title: 'Expert Therapists',
    description: '500+ licensed professionals across multiple specializations.',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor your mental health journey with personalized insights.',
  },
];

function Features() {
  return (
    <section className="features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="features-label">Platform</div>
          <h2 className="features-title">
            Everything you need for better mental health
          </h2>
          <p className="features-subtitle">
            Professional support designed around your needs
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="feature-icon">
                <feature.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
