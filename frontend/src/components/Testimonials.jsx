import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    stars: 5,
    text: 'MindEase changed my life. My therapist truly understands me and I finally feel like I have the tools to manage my anxiety. The scheduling is incredibly convenient.',
    name: 'Sarah M.',
    role: 'Software Engineer',
    initials: 'SM',
  },
  {
    stars: 5,
    text: 'After years of hesitation, I finally started therapy through MindEase. The process was so simple and my therapist is amazing. Highly recommend to anyone on the fence.',
    name: 'James R.',
    role: 'Graduate Student',
    initials: 'JR',
  },
  {
    stars: 5,
    text: 'The video sessions feel just as personal as in-person visits. I love being able to message my therapist between sessions when I need a little extra support.',
    name: 'Priya K.',
    role: 'Marketing Director',
    initials: 'PK',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="testimonials-label">Testimonials</div>
          <h2 className="testimonials-title">
            What our clients say
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
