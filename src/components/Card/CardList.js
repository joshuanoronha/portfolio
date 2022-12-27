import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import { projects } from '../../data/projects';

export default function CardList() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const cardContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  //   const scroll = window.requestAnimationFrame
  //         || function (callback) { window.setTimeout(callback, 1000 / 60); };
  //   function isElementInViewport(el) {
  //     // special bonus for those using jQuery
  //     if (typeof jQuery === 'function' && el instanceof jQuery) {
  //       el = el[0];
  //     }
  //     const rect = el.getBoundingClientRect();
  //     return (
  //       (rect.top <= 0
  //                 && rect.bottom >= 0)
  //             || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
  //                 && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
  //             || (rect.top >= 0
  //                && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  //     );
  //   }
  return (
    <motion.div ref={ref} className="container" variants={cardContainerVariants} initial="hidden" animate={controls}>
      <h2 style={{ color: 'var(--secondary)' }}>A Few of my Projects</h2>
      {projects.map((project) => (
        <Card project={project} key={project.name} />
      ))}
    </motion.div>
  );
}
