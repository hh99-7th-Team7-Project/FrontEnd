import React from 'react';
import './App.css';
import Router from './shared/Router';
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import RouteChangeTracker from './shared/RouteChangeTracker';


function App() {

  RouteChangeTracker();

  return (
    <>
      <SCwrap>
        <AnimatePresence>
          <Router />
        </AnimatePresence>
      </SCwrap>
    </>
  );
}


export default App;

const SCwrap = styled.div`
display: flex;
flex-direction: column;
width: 100%;
overflow: hidden;
font-size: 16px;
@media all and (max-width: 750px) {
  font-size: 12px;
}
/* justify-content: center; */
`