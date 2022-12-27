import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceList } from '../../data/experience';

export default function Experience() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const experienceListVariants = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: -10,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };
  return (
    <Container style={{ marginTop: '3em' }}>
      <motion.div
        ref={ref}
        variants={experienceListVariants}
        initial="hidden"
        animate={controls}
      >
        <h1
          style={{
            color: 'var(--secondary)',
            fontSize: '2rem',
            marginBottom: '30px',
          }}
        >
          Experience
        </h1>
        {experienceList.map((experience) => (
          <motion.div
            style={{
              color: 'var(--secondary)',
              marginTop: '1.1em',
            }}
            key={experience.period}
            variants={experienceListVariants}
          >
            <div style={{ marginTop: '1.5em' }}>
              <span style={{ color: 'var(--fontColor)', fontSize: '1.2rem' }}>
                {experience.designation}
              </span>
              <span
                style={{
                  float: 'right',
                  color: 'var(--subsecondary)',
                  fontSize: '0.9rem',
                }}
              >
                {experience.period}
              </span>
            </div>
            <div>{experience.companyName}</div>
            <div style={{ marginTop: '1em', fontSize: '0.9rem' }}>
              <ul>
                {
                  experience.description.map((item) => (
                    <li key={item.substring(0, 100)}>
                      {item}
                    </li>
                  ))
                }
              </ul>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </Container>
  );
}
