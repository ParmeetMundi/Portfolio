import './App.css';
import React from 'react';
import { Suspense, lazy } from 'react';
import Introduction from './Introduction';
import Navbar from './Navbar';
const Skills = React.lazy(() => import('./Skills'));
const Education = React.lazy(() => import('./Education'));
const Achivements = React.lazy(() => import('./Achivements'));
const Project1 = React.lazy(() => import('./Project1'));



function App() {
  return (
    <div className="App">
          <Navbar/>
          <Introduction/>
          <Suspense fallback={<div>Loading...</div>}>
          <Education />
         </Suspense>
         <Suspense fallback={<div>Loading...</div>}>
         <Achivements/>
         </Suspense>
         <Suspense fallback={<div>Loading...</div>}>
         <Project1/>
         </Suspense>
         <Suspense fallback={<div>Loading...</div>}>
         <Skills/>
         </Suspense>
    </div>
  );
}

export default App;
