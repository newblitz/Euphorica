import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import '../styles/Hero.css';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero-noise" />
      <motion.div
        className="hero-glow-1"
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-glow-2"
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <div className="hero-grid-lines" />

      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge-pulse" />
          <span>Professional Mental Health Support</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-title-line" variants={lineVariants}>
            Your mind deserves
          </motion.span>
          <motion.span className="hero-title-line" variants={lineVariants}>
            <span className="teal">expert care.</span>
          </motion.span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Connect with licensed therapists who understand your journey.
          Evidence-based therapy, accessible from anywhere.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <motion.a
            href="/appointment"
            className="hero-btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Session <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="/know_more"
            className="hero-btn-secondary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More <ChevronRight size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-metrics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="hero-metric">
            <div className="hero-metric-value">
              <AnimatedCounter target={2000} suffix="+" />
            </div>
            <div className="hero-metric-label">Sessions Completed</div>
          </div>
          <div className="hero-metric-divider" />
          <div className="hero-metric">
            <div className="hero-metric-value">
              <AnimatedCounter target={500} suffix="+" />
            </div>
            <div className="hero-metric-label">Licensed Therapists</div>
          </div>
          <div className="hero-metric-divider" />
          <div className="hero-metric">
            <div className="hero-metric-value">
              <AnimatedCounter target={98} suffix="%" />
            </div>
            <div className="hero-metric-label">Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
