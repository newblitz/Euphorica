import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, Zap } from 'lucide-react';
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

function FloatingParticle({ delay, duration, x, y }) {
  return (
    <motion.div
      className="floating-particle"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [0, x, x * 1.5],
        y: [0, y, y * 1.5],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

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
      <motion.div
        className="hero-background-image"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mental wellness"
        />
        <div className="hero-image-overlay" />
      </motion.div>

      <div className="hero-noise" />

      {[...Array(15)].map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.5}
          duration={8 + Math.random() * 4}
          x={(Math.random() - 0.5) * 200}
          y={(Math.random() - 0.5) * 200}
        />
      ))}

      <motion.div
        className="hero-glow-1"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-glow-2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.2, 0.12],
          x: [20, -20, 20],
          y: [20, -20, 20]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="hero-glow-3"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <div className="hero-grid-lines" />

      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="badge-pulse"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Sparkles size={14} />
          <span>AI-Powered Mental Health Support</span>
          <Zap size={14} />
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-title-line" variants={lineVariants}>
            Transform Your Mental
          </motion.span>
          <motion.span className="hero-title-line" variants={lineVariants}>
            <span className="gradient-text">Wellness Journey</span>
          </motion.span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Connect with certified therapists and unlock personalized mental health support.
          Experience cutting-edge therapy powered by AI insights, accessible anytime, anywhere.
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
            whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(14, 165, 233, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Journey</span>
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="/know_more"
            className="hero-btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Features</span>
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-metrics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            className="hero-metric"
            whileHover={{ scale: 1.05 }}
          >
            <div className="hero-metric-value">
              <AnimatedCounter target={5000} suffix="+" />
            </div>
            <div className="hero-metric-label">Lives Transformed</div>
          </motion.div>
          <div className="hero-metric-divider" />
          <motion.div
            className="hero-metric"
            whileHover={{ scale: 1.05 }}
          >
            <div className="hero-metric-value">
              <AnimatedCounter target={750} suffix="+" />
            </div>
            <div className="hero-metric-label">Expert Therapists</div>
          </motion.div>
          <div className="hero-metric-divider" />
          <motion.div
            className="hero-metric"
            whileHover={{ scale: 1.05 }}
          >
            <div className="hero-metric-value">
              <AnimatedCounter target={99} suffix="%" />
            </div>
            <div className="hero-metric-label">Success Rate</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
