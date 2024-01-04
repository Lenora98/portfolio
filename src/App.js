
import './App.css';
import styled,{ThemeProvider} from "styled-components";
import { darkTheme } from './utils/Themes.js'

import HeroSection from "./components/HeroSection";

import Experience from './components/Experience';

import Education from './components/Education';

import Skills from "./components/Skills";

import Navbar from "./components/Navbar";

import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Projects/index.js';
const Body=styled.div`
background-color:${({theme})=>theme.bg};
width:100%;
height:100%;
overflow-x:hidden;
`;

const Wrapper =styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
          <HeroSection/>
          <Wrapper>
          <Skills/>
          <Experience/>
          <Projects/>
          <Education/> 
          <Contact/>
          </Wrapper>
          <Footer/>
      </Body>

      </Router>
      
    </ThemeProvider>
  );
}

export default App;
