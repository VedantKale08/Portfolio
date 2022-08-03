import './App.css';
import Intro from './Component/IntroComp/intro';
import About from './Component/AboutComp/about';
import ProductList from './Component/ProductListComp/productList';
import Contact from './Component/Contact/Contact';
import Darkmode from './Component/DarkModeComp/Darkmode';
import React, { useContext } from 'react'
import { ThemeConext } from './context';

function App() {

  const theme = useContext(ThemeConext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color:darkMode && "white"}}>
    <Darkmode/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>
  );
}

export default App;
