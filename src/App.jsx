
import { Component } from 'react';
import Banner from './components/Banner'; 
import NavBar from './components/NavBar';
import Abaut from './components/Abault';
import Skills from './components/Skills';
import Projetos from './components/Projetos';
import Footer from './components/Footer'

import './App.scss';

export default class App extends Component{
  render(){
    return(
      <>
      <NavBar/>
      <Banner/> 
      <Abaut/>
      <Skills/>
      <Projetos/>
      <Footer/>
      </>
    )        
            
  }

}

