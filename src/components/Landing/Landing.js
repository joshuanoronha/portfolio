import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Icon from '../BasicComponents/Icon';
import { landing } from '../../data/landing';
import './landing.css';

function Landing() {
  const variant = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        staggerChildren: 0.2,
        mass: 0.1,
        duration: 2,
      },
    },
  };
  const titleVariant = {
    animate: {
      color: ['#e91e63', '#03a9f4', '#4a148c'],
      transition: {
        type: 'spring',
        color: {
          yoyo: Infinity,
          duration: 5,
        },
        delay: 0.9,
      },
    },
  };
  return (
    <Container id="landing-container" fluid="md">
      <motion.div variants={variant} initial="initial" animate="animate">
        <motion.div id="preface" variants={variant}>Hi, my name is</motion.div>
        <motion.div id="title" variants={titleVariant} initial="initial" animate="animate">{landing.name}</motion.div>
        <motion.div id="subtitle" variants={variant}>
          I am a&nbsp;
          {landing.role}
        </motion.div>
        <motion.div id="title-text" variants={variant}>
          {landing.description}
        </motion.div>
        <motion.span variants={variant}>
          <div id="landing-icon-container" style={{ marginTop: '20px' }}>
            <Icon
              url="https://www.linkedin.com/in/joshua-noronha/"
              iconType="fa-linkedin"
            />
            <Icon
              url="mailto:joshuanoronha.portfolio@gmail.com"
              iconType="fa-envelope-o"
            />
            <Icon
              url="https://github.com/joshuanoronha/"
              iconType="fa-github"
            />
            <Icon
              url="https://trialbycode.com"
              iconType="fa-rss"
            />
          </div>
        </motion.span>
      </motion.div>
    </Container>
  );
}

export default Landing;
