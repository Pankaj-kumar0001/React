import React from 'react';
import { Outlet,Link, NavLink } from 'react-router-dom';


function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.paragraph}>
        You can reach out at: <b>contact@example.com</b>
      </p>

      <div style={styles.buttonGroup}>
        <Link to="Permanent" style={styles.button}>
          Permanent
        </Link>
        <NavLink to="Temporary" style={styles.button}>
          Temporary
        </NavLink>
      </div>
        <div style={{ marginTop: '30px' }}>
        <Outlet />
      </div>
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
    color: '#dc2626'
  },
  paragraph: {
    fontSize: '18px',
    color: '#555'
  },
  buttonGroup: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#dc2626',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  }
};

export default Contact;
