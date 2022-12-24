import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';

import Toggle from './Toggle';
import './navbar.css';

export default function MainNavbar() {
  const darkMode = true;
  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: 'spring',
        staggerChildren: 0.2,
        delay: 0.7,
      },
    },
  };
  return (
    <motion.span variants={variant} initial="initial" animate="animate">
      <Navbar id="navbar" expand="lg">
        <Navbar.Brand href="#home" id="brand"><Logo /></Navbar.Brand>
        <Nav.Item className="ml-auto">
          <Toggle darkMode={darkMode} />
        </Nav.Item>
      </Navbar>
    </motion.span>
  );
}
