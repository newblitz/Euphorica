import { motion } from 'framer-motion';
import '../styles/HowItWorks.css';

const steps = [
  {
    number: '1',
    title: 'Create Your Account',
    description: 'Sign up in under a minute. Share your goals and preferences so we can match you with the right therapist.',
  },
  {
    number: '2',
    title: 'Choose a Therapist',
    description: 'Browse licensed professionals filtered by specialization, availability, and approach to find your perfect match.',
  },
  {
    number: '3',
    title: 'Start Your Sessions',
    description: 'Book your first session and begin your journey to better mental health through video, chat, or phone.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <motion.div
          className="how-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="how-label">Process</div>
          <h2 className="how-title">How it works</h2>
          <p className="how-subtitle">
            Three simple steps to start feeling better
          </p>
        </motion.div>

        <div className="how-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="how-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                className={`step-number ${index === 0 ? 'step-number-active' : 'step-number-inactive'}`}
                whileInView={index === 0 ? {
                  boxShadow: ['0 0 0 0 rgba(20, 184, 166, 0)', '0 0 0 12px rgba(20, 184, 166, 0.1)', '0 0 0 0 rgba(20, 184, 166, 0)'],
                } : {}}
                viewport={{ once: true }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                {step.number}
              </motion.div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
