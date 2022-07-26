import React from 'react';
import './App.css';
import Router from './shared/Router';
import styled from 'styled-components'
import {AnimatePresence} from 'framer-motion'
import Header from './pages/Header/Header';



function App() {
  return (
    <SCwrap> 
      <AnimatePresence>
        {/* <Header/> */}
        <Router />
      </AnimatePresence>
    </SCwrap>
  );
}



export default App;

const SCwrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
overflow: hidden;
/* justify-content: center; */
`