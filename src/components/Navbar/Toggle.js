import React from 'react';
import { Form } from 'react-bootstrap';

export default function Toggle() {
  let dark = false;
  const toggleDarkMode = () => {
    dark = !dark;
    const root = document.querySelector('body');
    if (dark) {
      root.style.setProperty('--primary', '#8892b0');
      root.style.setProperty('--secondary', '#aeafaf');
      root.style.setProperty('--subsecondary', '#3a506b');
      root.style.setProperty('--background', '#0b132b');
      root.style.setProperty('--fontColor', '#ffffff');
    } else {
      root.style.setProperty('--primary', '#8892b0');
      root.style.setProperty('--secondary', '#8892b0');
      root.style.setProperty('--subsecondary', '#8892b0');
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--fontColor', '#232323');
    }
  };
  return (
    <div style={{ display: 'inline-block' }}>
      <i className="fa fa-sun-o" style={{ display: 'inline-block', color: 'var(--secondary)' }} aria-hidden="true" />
      <Form.Check
        type="switch"
        id="custom-switch"
        label=""
        style={{ display: 'inline-block', margin: '0 0 0 7px' }}
        value={dark}
        onChange={toggleDarkMode}
      />
      <i className="fa fa-moon-o" aria-hidden="true" style={{ display: 'inline', color: 'var(--secondary)' }} />
    </div>
  );
}
