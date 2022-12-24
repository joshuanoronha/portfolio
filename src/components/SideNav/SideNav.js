import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';
import Icon from '../BasicComponents/Icon';
import './sidenav.css';

export default function SideBar() {
  return (
    <>
      <motion.div id="sidenav">
        <Logo />
        <div id="icon-container">
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
        </div>
      </motion.div>
    </>
  );
}
