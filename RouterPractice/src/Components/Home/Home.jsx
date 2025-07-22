import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to the Home Page</h2>
      <p style={styles.paragraph}>
        This is a simple React Router demo. Navigate using the header links.
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
    color: '#4A90E2'
  },
  paragraph: {
    fontSize: '18px',
    color: '#555'
  }
};

export default Home;
