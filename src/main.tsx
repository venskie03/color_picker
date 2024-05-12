import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Neon from './Colors/Neon.tsx';
import Warm from './Colors/Warm.tsx';
import Light from './Colors/Light.tsx';
import Cold from './Colors/Cold.tsx';
import Summer from './Colors/Summer.tsx';
import Winter from './Colors/Winter.tsx';
import Retro from './Colors/Retro.tsx';
import Spring from './Colors/Spring.tsx';
import Happy from './Colors/Happy.tsx';
import Nature from './Colors/Nature.tsx';
import Earth from './Colors/Earth.tsx';
import Night from './Colors/Night.tsx';
import Space from './Colors/Space.tsx';
import Rainbow from './Colors/Rainbow.tsx';
import Sunset from './Colors/Sunset.tsx';
import Sky from './Colors/Sky.tsx';
import Sea from './Colors/Sea.tsx';
import Kids from './Colors/Kids.tsx';
import Skin from './Colors/Skin.tsx';
import Food from './Colors/Food.tsx';
import Cream from './Colors/Cream.tsx';
import Coffee from './Colors/Coffee.tsx';
import Wedding from './Colors/Wedding.tsx';
import Christmass from './Colors/Christmass.tsx';
import Halloween from './Colors/Halloween.tsx';
import Header from './Colors/Header.tsx';
import Apidocs from './Colors/Apidocs.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Router>
    <Header/>
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/neoncolors" element={<Neon />} />
      <Route path="/warmcolors" element={<Warm />} />
      <Route path="/lightcolors" element={<Light />} />
      <Route path="/coldcolors" element={<Cold />} />
      <Route path="/summercolors" element={<Summer />} />
      <Route path="/wintercolors" element={<Winter />} />
      <Route path="/retrocolors" element={<Retro />} />
      <Route path="/springcolors" element={<Spring />} />
      <Route path="/happycolors" element={<Happy />} />
      <Route path="/naturecolors" element={<Nature />} />
      <Route path="/earthcolors" element={<Earth />} />
      <Route path="/nightcolors" element={<Night />} />

      <Route path="/spacecolors" element={<Space />} />
      <Route path="/rainbowcolors" element={<Rainbow />} />
      <Route path="/sunsetcolors" element={<Sunset />} />
      <Route path="/skycolors" element={<Sky />} />
      <Route path="/seacolors" element={<Sea />} />
      <Route path="/kidscolors" element={<Kids />} />
      <Route path="/skincolors" element={<Skin />} />
      <Route path="/foodcolors" element={<Food />} />
      <Route path="/creamcolors" element={<Cream />} />
      <Route path="/coffeecolors" element={<Coffee />} />

      <Route path="/weddingcolors" element={<Wedding />} />
      <Route path="/christmascolors" element={<Christmass />} />
      <Route path="/halloweencolors" element={<Halloween />} />
      <Route path="/apidocs" element={<Apidocs />} />
    </Routes> 
  </Router>
  </React.StrictMode>,
)
