import React from 'react';
import { Container } from 'react-bootstrap';
import { experienceList } from '../../data/experience';

export default function Experience() {
  return (
    <>
      <Container style={{ marginTop: '3em' }}>
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
          <span
            style={{
              color: 'var(--secondary)',
              marginTop: '1.1em',
            }}
            key={experience.period}
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
          </span>
        ))}

      </Container>
    </>
  );
}
