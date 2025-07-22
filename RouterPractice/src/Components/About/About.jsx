import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        We are learning how React Router works with modern routing and layout.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px'
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#16a34a'
  },
  paragraph: {
    fontSize: '18px',
    color: '#555'
  }
};

export default About;
