import React from 'react';
import Header from './components/Header/Header.js';
import Home from './components/Main/Home/Home.js';
import About from './components/Main/About/About.js';
import Project from './components/Main/Project/Project.js';
import Skill from './components/Main/Skill/Skill.js';
import Contact from './components/Main/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import { useEffect } from 'react';

function App() {
  const [show, setShow] = React.useState(false);
  const functionShow = (app) => {
    setShow(app);
  }

  return (
    <>
      <Header handleShow={functionShow} />
      <Home handleShow={functionShow}/>
      <About />
      <Project />
      <Skill />
      <Contact show={show} handleShow={functionShow}/>
      <Footer />
    </>
  );
}

export default App;