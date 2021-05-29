import React from 'react';
import Particles from 'react-particles-js';
import Navbar from './Navbar';
import Header from './Header';
import Scroll from './Scroll';
import About from '../pages/About';
import Portfolio from './Portfolio';
import ContactForm from '../pages/ContactForm';
import Technologies from '../pages/Technologies';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <Scroll />
      <About />
      <ContactForm />
      <Technologies />
      <Footer />
    </>
  );
};

export default Layout;
