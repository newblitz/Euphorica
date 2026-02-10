import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import '../styles/Benefits.css';

function Benefits() {
  return (
    <section className="cta-section">
      <div className="cta-glow" />
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to start your journey?
          </motion.h2>
          <motion.p
            className="cta-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands who have transformed their mental health with MindEase.
            Your first consultation is completely free.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="/appointment"
              className="cta-btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Your First Session <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="/know_more"
              className="cta-btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More <ChevronRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Benefits;
